
const App_Keyword = Object.freeze({
    MACOS: "Mac",
    IOS: "iOS",
    WINDOWS: "Windows",
    FREE: "free!"
});

const PBG_Portfolio_Item = ({fn_image, name = null, description = null,
  ad_fn_image = null, video_fn_image = null, pdf = null,
  colour_bg1 = null, colour_bg2 = null}) => ({
    fn_image,
    name,
    ad_fn_image,
    description,
    video_fn_image,
    pdf,
    colour_bg1,
    colour_bg2
});

const Screenshot_Item = (name, title, description) => ({
    imageName: name,
    title,
    description
});


/* ------------------------------------------------- */
/* ---				        Data: CV       	    	   	---- */
/* ------------------------------------------------- */

let cv_items = {emoji: "🌞",
								   title: "Curricula Vitae",
								   description: "My CVs.",
								   items: [

                  PBG_Portfolio_Item({name: "General CV",
                      fn_image: "Philip Gottschalk - General CV - 2026-10.jpg",
                      description: "My general CV.",
                      pdf: "Philip Gottschalk - General CV - 2026-10.pdf" }),
									PBG_Portfolio_Item({name: "Software Engineer CV",
                      fn_image: "Philip Gottschalk - Software Engineer CV - 2026-10.jpg",
											description: "My software-engineering-specific CV.",
											pdf: "Philip Gottschalk - Software Engineer CV - 2026-10.pdf" })
                    ]
                  };

/* ------------------------------------------------- */
/* ---				     Data: Recent Apps    		   	---- */
/* ------------------------------------------------- */

const block_ed = {
	name: "Block Ed",
	description: "For making colourful notes and doodles.",
	fn_image: "2025 - Block Ed_w512.webp",
	app_id: "block_ed",
	keywords: [App_Keyword.MACOS, App_Keyword.IOS],
	hashtags: ["#retro","#monospaced","#iCloud","#nosub"],
	screenies: [
		Screenshot_Item("block-ed/block_ed_00.webp", "Block Ed", "Type, doodle, organize."),
		Screenshot_Item("block-ed/block_ed_01.webp", "Type", "Type anywhere.  Object-less interface."),
		Screenshot_Item("block-ed/block_ed_02.webp", "Draw", "Doodle pixel-art masterpieces."),
		Screenshot_Item("block-ed/block_ed_03.webp", "Decorate", "Decorate your notes."),
		Screenshot_Item("block-ed/block_ed_04.webp", "Go Retro", "This app was inspired by Teletext."),
		Screenshot_Item("block-ed/block_ed_05.webp", "Add Symbols (and Emoji)", "Use ⁍, ☄, ✔ etc. without having to Google for them."),
		Screenshot_Item("block-ed/block_ed_06.webp", "Resize", "Not just down/right, but up and left too"),
		Screenshot_Item("block-ed/block_ed_07.webp", "Export", "Export to .png or .pdf"),
		Screenshot_Item("block-ed/block_ed_08.webp", "Mac", "Designed for Mac as well as iPhone!"),
		Screenshot_Item("block-ed/block_ed_09.webp", "iPad", "Will also work on your iPad!")
	],
	colour_bg1: "rgb(251,200,200)",
	colour_bg2: "rgb(253,246,180)",
};

let howls = {
	name: "HowLS",
	description: "For keeping track of mundane, semi-regular tasks.",
	fn_image: "2026 - HowLS_w512.webp",
	app_id: "howls",
	keywords: [App_Keyword.IOS],
	hashtags: ["#how_long_since_I_changed_my_toothbrush"],
	screenies: [
		Screenshot_Item("howls/howls_00.webp", "HowLS", "Maintain your own library of tasks too unworthy to clutter your calendar."),
		Screenshot_Item("howls/howls_01.webp", "Today", "Do a task, swipe it away.  Quick, easy, gone."),
		Screenshot_Item("howls/howls_02.webp", "Upcoming", "Check upcoming tasks.  Be extra-keen and do them early. 😉"),
	],
	colour_bg1: "rgb(255,200,174)",
	colour_bg2: "rgb(255,149,109)"
};

let qconvert2 = {
	name: "Q-Convert 2",
	description: "For quick, offline conversions of lengths, times, weights, temperatures etc.",
	fn_image: "2026 - Q-Convert 2_w512.webp",
	app_id: "qconvert2",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [
		Screenshot_Item("q-convert-2/qconvert2_00.webp", "Q-Convert 2", "Convert between things in a snap.  Offline."),
		Screenshot_Item("q-convert-2/qconvert2_01.webp", "Sliders", "Use sliders, faster than asking your AI."),
		Screenshot_Item("q-convert-2/qconvert2_02.webp", "Numbers", "Formatted for your reading pleasure."),
		Screenshot_Item("q-convert-2/qconvert2_03.webp", "Metric or Imperial?", "Both, of course."),
	],
	colour_bg1: "rgb(117,128,255)",
	colour_bg2: "rgb(172,157,252)"
};

let colour_well = {
	name: "Colour Well",
	description: "Get colour codes and quickly test contrasts between pairs of colours, black and white.",
	fn_image: "2026 - Colour Well_w512.webp",
	app_id: "colour_well",
	keywords: [App_Keyword.IOS, App_Keyword.FREE],
	hashtags: ["#for_coders", "#and_digital_artists"],
	screenies: [
		Screenshot_Item("colour-well/colour_well_00.webp", "Colour Well", "I used the app to find colours for this page and many others. 😀"),
		Screenshot_Item("colour-well/colour_well_01.webp", "Source Code", "The source code is (or soon will be) online. 😎"),
	],
	colour_bg1: "rgb(255,184,88)",
	colour_bg2: "rgb(187,250,255)"
};


/* ------------------------------------------------- */
/* ---				     Data: Legacy Apps    		   	---- */
/* ------------------------------------------------- */

let surrounded = {
	name: "Surrounded!",
	description: "A retro arcade game: a cross between Space Invaders and Asteroids",
	fn_image: "2006 - Surrounded!_w512.webp",
	app_id: "surrounded",
	keywords: [App_Keyword.WINDOWS],
	hashtags: [],
	screenies: [
		Screenshot_Item("media/ads/legacy-apps/Surrounded!.webp", "", "")
	],
  colour_bg1: "rgb(128,128,255)",
  colour_bg2: "rgb(255,185,77)"
	//	Screenshot_Item("fn", "folder", "desc"),
};
let kpad = {
	name: "K-Pad",
	description: "A booklet creation app, featuring a text, DTP & image gallery",
	fn_image: "2007 - KPad_w512.webp",
	app_id: "kpad",
	keywords: [App_Keyword.WINDOWS],
	hashtags: [],
	screenies: [],
  colour_bg1: "rgb(255,128,136)",
  colour_bg2: "rgb(77,129,255)"
	//	Screenshot_Item("fn", "folder", "desc"),
	//]
}
let ropas = {
	name: "Ropas",
	description: "A logic puzzle game based on rock-paper-scissors",
	fn_image: "2009 - Ropas_w512.webp",
	app_id: "ropas",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [
		Screenshot_Item("media/ads/legacy-apps/Ropas ad.webp", "", "")
	],
  colour_bg1: "rgb(255,230,128)",
  colour_bg2: "rgb(252,207,80)"
};
let funky_ticker = {
	name: "Funky Ticker",
	description: "Turns your whole screen into a giant 3D text ticker",
	fn_image: "2010 - Funky Ticker_w512.webp",
	app_id: "funky_ticker",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [
		Screenshot_Item("media/ads/legacy-apps/Funky Ticker ad.webp", "", "")
	],
  colour_bg1: "rgb(255,227,128)",
  colour_bg2: "rgb(77,77,255)"
};
let matrat = {
	name: "Movie & TV Rater",
	description: "An app that allows you to rate and comment any scene in a movie or TV show as you're watching",
	fn_image: "2011 - MatRat_w512.webp",
	app_id: "matrat",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [
		Screenshot_Item("media/ads/legacy-apps/Matrat ad.webp", "", "")
	],
  colour_bg1: "rgb(255,129,128)",
  colour_bg2: "rgb(255,111,77)"
}
let rainbow_rings = {
	name: "Rainbow Rings",
	description: "An arcade game for iOS",
	fn_image: "2011 - Rainbow Rings_w512.webp",
	app_id: "rainbow_rings",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [
		Screenshot_Item("media/ads/legacy-apps/Rainbow Rings ad.webp", "", "")
	],
  colour_bg1: "rgb(128,132,255)",
  colour_bg2: "rgb(255,77,80)"
};
let q_convert = {
	name: "Q-Convert",
	description: "An app to convert a temperature, distance, weight etc. faster than you can Google it",
	fn_image: "2012 - Q-Convert_w512.webp",
	app_id: "qconvert",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [
		Screenshot_Item("media/ads/legacy-apps/Q-Convert ad.webp", "", "")
	],
  colour_bg1: "rgb(132,128,255)",
  colour_bg2: "rgb(229,77,255)"
};
let text_synth = {
	name: "Text Synth",
	description: "An app to convert text to synthesized music",
	fn_image: "2012 - TextSynth_w512.webp",
	app_id: "text_synth",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [
		Screenshot_Item("media/ads/legacy-apps/TextSynth ad.webp", "", "")
	],
  colour_bg1: "rgb(255,229,128)",
  colour_bg2: "rgb(77,186,255)"
};
let lgv = {
	name: "LGV",
	description: "An app to learn German vocab the old-fashioned way: with a list and a virtual sheet of paper",
	fn_image: "2013 - LGV_w512.webp",
	app_id: "lgv",
	keywords: [App_Keyword.IOS],
	hashtags: [],
  screenies: [],
  colour_bg1: "rgb(255,128,137)",
  colour_bg2: "rgb(255,236,77)"
};
let date_measure = {
	name: "Date Measure",
	description: "An app to measure the time between two dates, broken down however you like",
	fn_image: "2021 - Date Measure_w512.webp",
	app_id: "date_measure",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [],
  colour_bg1: "rgb(255,187,128)",
  colour_bg2: "rgb(255,217,77)"
};
let icon_cobbler = {
	name: "Icon Cobbler",
	description: "An app to create a whole set of app icons in a flash, with custom backgrounds, borders & bugs",
	fn_image: "2022 - Icon Cobbler_w512.webp",
	app_id: "icon_cobbler",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [],
  colour_bg1: "rgb(255,128,154)",
  colour_bg2: "rgb(255,91,77)"
};
let sleep_well = {
	name: "Sleep Well",
	description: "An app to keep your Mac asleep, even if a cat, bad USBs or poor OS design tries to wake it prematurely",
	fn_image: "2023 - Sleep Well_w512.webp",
	app_id: "sleep_well",
	keywords: [App_Keyword.IOS],
	hashtags: [],
	screenies: [],
  colour_bg1: "rgb(154,128,255)",
  colour_bg2: "rgb(255,237,77)"
};

/* ------------------------------------------------- */
/* ---				   Data: Coding Projects    	   	---- */
/* ------------------------------------------------- */

let ps_coding_lib = {emoji: "👨🏻‍💻",
								   title: "Coding Projects",
								   description: "Some of my coding projects",
								   items: [

									PBG_Portfolio_Item({name: "Text Engine",
                             fn_image: "Super Text Engine_w512.webp",
													   description: "My most ambitious project yet: a text engine for Metal, using a texture atlas for glyphs, CoreText for layout basics, and a compute shader for effect templates.  Will be the backbone of all my future projects.",
													   video_fn_image: "STEM/PBG_STEM.mp4" }),
 									PBG_Portfolio_Item({name: "Symbol Crafter",
                              fn_image: "Symbol Crafter.webp",
 													   description: "My engine to create animated fonts from brushstrokes.\n\nBelow is a video generated using a font sampled from my daughter's handwriting.",
 													   video_fn_image: "Handwriting/Elsa's beautiful handwriting.mp4" }),
 									PBG_Portfolio_Item({name: "Cosine Palette Types",
                              fn_image: "Cosine Palette Types.webp",
 													   description: "How to make Metal backgrounds, borders & glows really stand out: generative effects using cosine palettes and patterns.\n\nOver a dozen palettes, and over 100 curated patterns to choose from.  Below is a selection.",
 													   video_fn_image: "CPT/CPT_selection.mp4" }),
									PBG_Portfolio_Item({name: "256-Colour Palette",
                             fn_image: "Palette_w512.webp",
													   description: "I wanted my own 256-colour palette to use within my apps.  Other palettes are proprietary or not ideal for my purposes.  I needed primarily a good greyscale spread, including \"almost\" white and black.  Then I wanted bold colours in addition to a lot of subtle pastels.  Finally I had to ensure there were no appreciable gaps in hue, saturation or luminance.  The additional colours then needed naming, and I wrote a small app just for that." }),
									PBG_Portfolio_Item({name: "Fancy Text",
                             fn_image: "Fancy Text_w512.webp",
													   description: "The state of text coding libraries is something of a mess.  I decided to write my own private library for creating all manner of 2D text effects from a simple text file.  These scripts can then be made into templates from which to quickly output a decent-looking header with one line of code.  Below are examples, all using Open Sans 3, but easily customizable for different fonts, colours and thicknesses, with animation if desired.\n\nIn the next version I plan to expand into 3D text using Metal shaders." }),
									PBG_Portfolio_Item({name: "Borders", fn_image: "Borders_w512.webp",
													   description: "There is a surprising lack of proper vector-based borders in code libraries.  Most apps' border options involve choosing thickness and the spacing of dots or dashes.  My own border library is a little more comprehensive." }),
									PBG_Portfolio_Item({name: "Patterns", fn_image: "Patterns_w512.webp",
													   description: "Often what lets down a GUI is too much \"empty\" space.  Fill these large areas with a pattern using subtle (or bold) colours and, all of a sudden, everything looks a whole lot better.  Many of these designs are based on famous Parquet patterns.  My pattern library makes adding these vector-based patterns a cinch - and employs easy modification of e.g. scale, colours, gaps, and fill types." }),
									PBG_Portfolio_Item({name: "Shapes", fn_image: "Shapes_w512.webp",
													   description: "Here is my small library of vector shapes, used for building badges, icons etc.  Since these are generated in code, edge thickness and colours can be easily adjusted from the defaults shown below." }),
									PBG_Portfolio_Item({name: "Block fonts", fn_image: "Block Fonts_w512.webp",
													   description: "I wanted to create some basic fonts whose characters could be created from a text file using ASCII art (triangles and squares).  These \"block fonts\" could be rendered very quickly and also stretched/compressed to fit limited space.\n\nFor my app, Block Ed, I required even-more-blocky fonts.  Each character of the below \"Pixel fonts\" is hashed into a 32- or 64-bit number - and generated automatically from the character sheets you see below.  Unlike pixel fonts you might find elsewhere, my library renders adjacent characters properly: for example, the \"o\" in \"To\" appears next to the trunk of the \"T\"." }),
									PBG_Portfolio_Item({name: "Icons", fn_image: "Icons_w512.webp",
													   description: "It has become too difficult and costly (in terms of time and disk space) to pre-generate bitmaps at multiple resolutions for today's massive variety of target devices.  But to include .pdf files (or even .svg) as resources is also costly - especially when such images might require multiple variations and/or be animated.  Therefore my apps now generate those resources on-the-fly.  They are vector-based, so scalable, and being code-derived, extremely easy to customize." }),
									PBG_Portfolio_Item({name: "Textures", fn_image: "Textures_w512.webp",
													   description: "When it comes to filling space, there are four main types of fills: solids, gradients, patterns & noises.  I wanted to construct a class library to encompass all possibilities: multiple layers and combinations of the above, each layer being masked as desired, with the potential for colour shifts and animation.  And I wanted the class to do the heavy lifting of reading a plain-text script and generating the texture on-the-fly.  Below are examples of basic textures that can be generated.  Combinations of these can be made with very little extra effort." })
	]};


/* ------------------------------------------------- */
/* ---				       Data: Other        		   	---- */
/* ------------------------------------------------- */

let my_writing = {
  name: "📚 writing",
  description: "I have been quite a prolific non-professional writer: several books, many series, mostly comedy.  It's a hobby.\nFor my earlier work I used my pen-name, Philip Benedict (which is the first two-thirds of my full name).",
  fn_image: "PP_Me.webp",
  screenies: [
    Screenshot_Item("writing/2013 - 📚 Space Rovers s2_w512.webp", "📚 Space Rovers", "My spoof of Star Trek. 2 book series, based partly on my script series of 50 episodes: 7 series + specials" ),
    Screenshot_Item("writing/2013 - 📕 Four Nights In Paris_w512.webp", "📕 Four Nights In Paris", "An autobiographical account of my family's trip to Paris, fighting off ants, pickpockets and gargoyles (well two out of three)." ),
		Screenshot_Item("writing/2013 - 📔 Undesirable_w512.webp", "📔 Undesirable", "A comedy about the dregs of society looking for love; 12 episodes: 2 series + novelette" ),
		Screenshot_Item("writing/2013 - 📔 Timecrawlers_w512.webp", "📔 Timecrawlers", "A time-travel sitcom; 12 episodes: 2 series + novelette" ),
		Screenshot_Item("writing/2012 - 📕 Zombie School_w512.webp", "📕 Zombie School", "Life goes on (so to speak), after everyone dies in the zombie apocalypse" ),
		Screenshot_Item("writing/2012 - 📕 Snow White_w512.webp", "📕 Snow White", "My retelling: faithful to the story, but with extra depth and villainy" ),
		Screenshot_Item("writing/2012 - 📕 Philip's Putrid Poetry_w512.webp", "📕 Philip's Putrid Poetry", "A totally unauthorized sequel to Roald Dahl's Revolting Rhymes" ),
		Screenshot_Item("writing/2012 - 📕 Dragon's Tooth_w512.webp", "📕 Dragon's Tooth", "82 episodes: 4 series + book" ),
		Screenshot_Item("writing/2012 - 📕 Demon In My Pocket_w512.webp", "📕 Demon In My Pocket", "Book:  a bullied boy finds help in the form of a dangerous new ally" ),
		Screenshot_Item("writing/2008 - 📜 Wyatt_w512.webp", "📜 Wyatt", "A western comedy; 12 episodes: 2 series + novelette" ),
		Screenshot_Item("writing/2005 - 📜 Suds_w512.webp", "📜 Suds", "A soap opera sitcom; 24 episodes: 2 series" ),
		Screenshot_Item("writing/2004 - 📜 Inspector Mouse_w512.webp", "📜 Inspector Mouse", "A detective spoof; 34 episodes: 5 series + a Christmas special" ),
  ],
  colour_bg1: "rgb(255,128,128)",
  colour_bg2: "rgb(77,77,255)"
  /* unused ads:
  ad_fn_image: "Philip's Putrid Poetry ad.webp",
  ad_fn_image: "Snow White ad.webp",
  ad_fn_image: "Space Rovers ad.webp", */
};

let ps_other = {emoji: "💫",
									  title: "Other",
									  description: "Some of my other achievements",
									  items: [

                      PBG_Portfolio_Item({fn_image: "1997 - 👨🏻‍🎓 BA Maths, Uni. of York.webp",
                           name: "My Degree",
                      description: "1st Class Honours, BA Mathematics\n\nUniversity of York" }),
										PBG_Portfolio_Item({name: "MMS", fn_image: "1996 - 📺 MMS, York_w512.webp",
														   description: "In my second year at the University of York I was Press & Publicity Officer for the second-largest society (after FilmSoc): the MultiMedia Society.  The MMS screened classic, cult and contemporary TV, usually fantasy & science-fiction.  This was in the days long before such material was readily available to buy (or otherwise find) on the Internet, and even before DVDs.   My tasks included cobbling together the booklets and designing their covers, and the various promotional posters." }),
										PBG_Portfolio_Item({name: "3D film #1", fn_image: "2009 - 🎥 Shortcut_w512.webp",
														   description: "I wrote, produced & directed this short film - and shot it in 3D, using a home-made steadycam rig, and 3D-joining software which I had previously created.\n\nIt won a special achievement award at the Beeping Bush \"2 Days Later\" 2009 film competition." }),
										PBG_Portfolio_Item({name: "3D film #2", fn_image: "2010 - 🎥 Visit Canterbury in 3D!_w512.webp",
														   description: "I wrote, produced & directed this short film - and shot it in 3D, using a home-made steadycam rig, and 3D-joining software which I had previously created." }),
                    my_writing
                  ]};


/* ------------------------------------------------- */
/* ---				       Data: Portfolio     		   	---- */
/* ------------------------------------------------- */

const portfolio =
{
    cv:[cv_items],
    coding_lib:[ps_coding_lib],
    recent_apps:[block_ed, howls, qconvert2, colour_well],
    legacy_apps:[surrounded, ropas, funky_ticker, matrat, rainbow_rings,
      icon_cobbler, q_convert, text_synth, lgv, date_measure, kpad, sleep_well],
    other:[ps_other],
};
