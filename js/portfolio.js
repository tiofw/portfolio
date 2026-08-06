

/* ------------------------------------------------- */
/* ---				    	 Run on Load  		     	   	---- */
/* ------------------------------------------------- */
create_sections(portfolio.coding_lib, "codingProjects");
create_cards(portfolio.recent_apps,"recentApps","card");
create_cards(portfolio.legacy_apps,"legacyApps","card small-card");
create_sections(portfolio.other, "otherSections");


/* ------------------------------------------------- */
/* ---				    	 Slugify Text  		     	   	---- */
/* ------------------------------------------------- */
// converts e.g. "Test! Test!" to "test-test"
// good for making IDs out of names
function slugify(value) {
    return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

/* ------------------------------------------------- */
/* ---				    	 Create Cards  		     	   	---- */
/* ------------------------------------------------- */

function create_sections(sections, sections_div, fp_base)
{
    const parent = document.getElementById(sections_div);
    sections.forEach(section_item =>
    {
        const section = document.createElement("section");
        section.id = "section-" + slugify(section_item.title);
        parent.appendChild(section);

        const h2 = document.createElement("h2");
        h2.innerText = section_item.emoji + " " + section_item.title;
        h2.description = section_item.description;
        section.appendChild(h2);

        const div = document.createElement("div");
        div.id = section_item.title;
        div.className = "card-row";
        section.appendChild(div);

        section_item.items.forEach(item =>
        {
          const card = document.createElement("div");
          card.id = section_item.title;
          card.className = "card";

          const folder = slugify(section_item.title) + "/";
          const img = `<img src="media/one-sheets/${folder}${item.fn_image}">`;
          if(item.name == null)
          {
            card.innerHTML = img;
          }
          else
          {
            const caption = `<p class="card-p"><span class="card-label">${item.name}</span></p>`;
            card.innerHTML = img + caption;
          }
          card.onclick = () => show_item(item, folder);
          div.appendChild(card);
        });
    });
}

function create_cards(list, parentID, card_class)
{
    const parent = document.getElementById(parentID);

    list.forEach(item =>
    {
        const card = document.createElement("div");
        card.className = card_class;
        const folder = "media/logos/apps/";
        card.innerHTML =
        `
        <img src="${folder}${item.fn_image}">
        <p class="card-p"><span class="card-label">${item.name}</span></p>
        `;
        card.onclick = () => show_item(item, folder);
        parent.appendChild(card);
    });
}


/* ------------------------------------------------- */
/* ---				     Modal Functions	     	     	---- */
/* ------------------------------------------------- */
const modal = document.getElementById("modal");
const closeButton = document.getElementById("modalClose");
closeButton.addEventListener("click", close_modal);
var cur_item = null;
modal.addEventListener("click", (event) =>
{
    if (event.target === modal)
        close_modal();
});
document.addEventListener("keydown", (event) =>
{
    if (event.key === "Escape" && !modal.classList.contains("hidden"))
        close_modal();
});

function close_modal()
{
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

function show_item(item, folder)
{
    cur_item = item;
  //  console.log("show_item: " + item);


    // background gradient
    if ( item.colour_bg1 && item.colour_bg2 ) {
      document.querySelector(".modal-content").style.background =
          `linear-gradient(${item.colour_bg1}, ${item.colour_bg2})`;
    }
    else {
        document.querySelector(".modal-content").style.background =
            `linear-gradient(rgb(255,237,77), rgb(154,128,255))`;
    }

    var icon_src = folder + item.fn_image;
    if ( ! icon_src.startsWith("media/") )
      icon_src = "media/one-sheets/" + icon_src;
    const show_top_row = item.name && item.description;
    if ( show_top_row )
    {
      modalIcon.src = icon_src;
      modalTitle.innerText = item.name;
      modalDescription.innerText = item.description;
      modalHeader.style.display = "";
    }
    else {
      modalHeader.style.display = "none";
    }

    // keywords
    modalKeywords.innerHTML = "";
    if ( item.keywords )
    {
      item.keywords.forEach(keyword =>
      {
          const pill = document.createElement("span");

          pill.className = "keyword";
          pill.textContent = keyword;

          modalKeywords.appendChild(pill);
      });
    }

    /* n.b. html looks like this:
    <div class="gallery">
        <!-- --- Thumbnail Column --- -->
        <div id="thumbnailColumn"></div>
        <!-- --- Preview Image, Title + Description --- -->
        <div class="preview">
            <div id="previewContainer"></div>
            <h3 id="imageTitle"></h3>
            <p id="imageDescription"></p>
        </div>
    </div>

    media/screenies/block-ed/block_ed_03.heic

    */
    thumbnailColumn.innerHTML = "";
    if ( item.screenies?.length == 1 )
    {
      const screenie = item.screenies[0];
      /*
        const thumbnail = document.createElement("img");
        thumbnail.src = "media/screenies/" + screenie.imageName;
        selectScreenshot(thumbnail, 0);*/
      update_media(screenie.imageName);
      imageTitle.textContent = "";
      imageDescription.textContent = "";
    }
    else if ( item.screenies?.length > 1 )
    {
      item.screenies.forEach((screenie, i) => {
          const thumbnail = document.createElement("img");
          thumbnail.src = "media/screenies/" + screenie.imageName;
          thumbnail.classList.add("thumbnail");
          if (i === 0)
              thumbnail.classList.add("selected");
          thumbnail.onclick = () => selectScreenshot(thumbnail, i);
          thumbnailColumn.appendChild(thumbnail);

          if ( i === 0 ) {
            selectScreenshot(thumbnail, 0);
          }
      });
    }
    else {
      var fp_media;
      if ( item.ad_fn_image ) {
        fp_media = "media/ads/" + folder + item.ad_fn_image;
      }
      else if ( item.video_fn_image ) {
        fp_media = "media/videos/" + folder + item.video_fn_image;
      }
      else {
        fp_media = icon_src;
      }
      update_media(fp_media);

      imageTitle.textContent = "";
      imageDescription.textContent = "";
      //media.style.opacity = 0;
    }

    modal.classList.remove("hidden");

    // Prevent background scrolling
    document.body.style.overflow = "hidden";
}

function update_media(fp_media)
{
  const is_video = fp_media.toLowerCase().endsWith(".mp4");
  var create_element = false;
  const child = previewContainer.firstElementChild;
  if (child?.nodeName.toLowerCase() === "img") {
    // img
    create_element = is_video;
  } else if (child?.nodeName.toLowerCase() === "video") {
    // video
    create_element = ! is_video;
  } else {
    // otherwise
    create_element = true;
  }
  if ( create_element ) {
    if ( is_video ) {
      media = document.createElement("video");
      media.controls = true;
      media.autoplay = true;
      media.loop = true;
      media.playsInline = true;
    }
    else {
      media = document.createElement("img");
    }
    previewContainer.replaceChildren(media);
  }
  media.src = fp_media;
}

function selectScreenshot(thumbnail, index)
{
    document
        .querySelectorAll(".thumbnail")
        .forEach(t => t.classList.remove("selected"));

    thumbnail.classList.add("selected");

    const shot = cur_item.screenies[index];

    console.log("typeof thumbnail: " + typeof(thumbnail));
    update_media(thumbnail.getAttribute("src"));//"media/screenies/" + shot.imageName);
    imageTitle.textContent = shot.title ?? "";
    imageDescription.textContent = shot.description ?? "";

    document
        .querySelectorAll(".thumbnail")
        .forEach((thumb, i) =>
        {
            thumb.classList.toggle("selected", i === index);
        });
}
