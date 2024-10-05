// Party Popper Animations start
const partyPopper1 = new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper1.resizeDrawingSurfaceToCanvas();
  },
});
const partyPopper2 = new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper2"),
  autoplay: true,
  layout: new rive.Layout({ fit: "contain", alignment: "center" }),
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper2.resizeDrawingSurfaceToCanvas();
  },
});
// Party Popper Animation end

// interior page start
// weDesign Popper Animations start
const weDesignLayout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 0,
  maxY: 50,
  minX: 900,
  minY: 0,
});
const weDesign = new rive.Rive({
  src: "./riv/Interior page - We Design.riv",
  canvas: document.getElementById("weDesign"),
  autoplay: true,
  onLoad: () => {
    weDesign.resizeDrawingSurfaceToCanvas();
  },
  stateMachines: "State Machine 1",
});
// weDesign Popper Animation end

// weDesign Popper Animations start
const weExcuteLayout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 20,
  maxY: 50,
  minX: 10,
  minY: 0,
});
const weExcute = new rive.Rive({
  src: "./riv/Interior_page-We_excute.riv",
  canvas: document.getElementById("weExcute"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    weExcute.resizeDrawingSurfaceToCanvas();
  },
});
const weManage = new rive.Rive({
  src: "./riv/Interior_page-We_manage.riv",
  canvas: document.getElementById("weManage"),
  autoplay: true,
  stateMachines: "State Machine 1",
  layout: new rive.Layout({ fit: "contain", alignment: "center" }),
  onLoad: () => {
    weManage.resizeDrawingSurfaceToCanvas();
  },
});
// weDesign Popper Animation end

// Design services Animations start
const DesignservicesLayout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 30,
  maxY: 550,
  minX: 900,
  minY: 0,
});
const Designservices = new rive.Rive({
  src: "./riv/Design services(Interior Page).riv",
  canvas: document.getElementById("designService"),
  autoplay: true,
  layout: DesignservicesLayout,
  stateMachines: "State Machine 1",
});
// Design services Animations  end

// Home Improvements Animations start
const homeImprovementsLayout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 30,
  maxY: 550,
  minX: 900,
  minY: 0,
});
const homeImprovements = new rive.Rive({
  src: "./riv/Home_Improvements.riv",
  canvas: document.getElementById("homeImprovements"),
  autoplay: true,
  layout: homeImprovementsLayout,
  stateMachines: "State Machine 1",
});
// Home Improvements Animation end

// designConsultation Animations start
const designConsultationLayout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 20,
  maxY: 800,
  minX: 900,
  minY: -200,
});
const designConsultation = new rive.Rive({
  src: "./riv/Design Consultation(Interior Page).riv",
  canvas: document.getElementById("designConsultation"),
  autoplay: true,
  layout: designConsultationLayout,
  stateMachines: "State Machine 1",

  /* onLoad: () => {
    designConsultation.resizeDrawingSurfaceToCanvas();
  }, */
});
// designConsultation Animation end

// designConsultation Animations start
const slide_1_layout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 20,
  maxY: 0,
  minX: 550,
  minY: -100,
});
const slide_1 = new rive.Rive({
  src: "./riv/Meet the team (Interiro).riv",
  canvas: document.getElementById("slide_1"),
  autoplay: true,
  stateMachines: "State Machine 1",
  layout: slide_1_layout,
});
const slide_2_layout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 20,
  maxY: 0,
  minX: 800,
  minY: -100,
});
const slide_2 = new rive.Rive({
  src: "./riv/Lock the design (Interior Page).riv",
  canvas: document.getElementById("slide_2"),
  autoplay: true,
  stateMachines: "State Machine 1",
  layout: slide_2_layout,
});
const slide_3_layout = new rive.Layout({
  fit: rive.Fit.FitHeight,
  alignment: rive.Alignment.TopCenter,
  maxX: 20,
  maxY: 0,
  minX: 800,
  minY: -100,
});
const slide_3 = new rive.Rive({
  src: "./riv/Get work done by experts (Interior page).riv",
  canvas: document.getElementById("slide_3"),
  autoplay: true,
  stateMachines: "State Machine 1",
  layout: slide_3_layout,
});
// designConsultation Animation end

// interior page end
