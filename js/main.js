(() => {

    //grab the car button
    const infos = document.querySelectorAll('.main');
    
    function fetchData() {
        fetch(`./includes/connect.php?accidentInfo=${this.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            parseCarData(data[0]);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function parseCarData(info) {
       //debugger;
        // take the database data and put it on the page
        const { intro, accident_type, survey_result } = info;
        // take the database data and put it on the page
        document.querySelector("#int").textContent = intro;
        document.querySelector("#sur").textContent = accident_type;
        document.querySelector("#res").textContent = survey_result;
    };

    infos.forEach(info => info.addEventListener("mouseover", fetchData));

    fetchData();
})();

var textLogo = document.querySelector('#logo');
var increment = document.querySelector('#incGraph');
var tubeLogo = document.querySelector('#tube1');
var tubeLogoB = document.querySelector('#tube2');
var tubeLogoC = document.querySelector('#tube3');
var tubeLogoD = document.querySelector('#tube4');
var tagGraph = document.querySelector('#tagGra');
var infoM = document.querySelector('#info');
var lg = document.querySelector('#lifeG');
var tline = document.querySelector('#tagline');

var waypoint = new Waypoint({
    element: document.querySelector('#logo'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      logoAnime();
    }, offset: 50
  })

  function logoAnime() {
      TweenMax.from(textLogo, 3, {opacity:0});
  }

  var waypoint = new Waypoint({
    element: document.querySelector('#info'),
    handler: function(direction) {
      console.log('Scrolled to waypoint23223!')
      infoAnime();
    },offset: 100
  })

  function infoAnime() {
      TweenMax.from(infoM, 1, {x:-1000, opacity:0, rotation:-90});
  }

  var waypoint = new Waypoint({
    element: infoM,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationI(this.element, ["data_info2"]);
    },offset: 150
  });

  function runAnimationI(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsI = {};
    switch (parent.id) {
        case "info":
        animPropsI = {x:1000, opacity:0, delay:1};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsI);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#info'), ["data_info2"]);
})


var waypoint = new Waypoint({
    element: document.querySelector('#incGraph'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      graphAnime();
    },offset: 100
  })

  function graphAnime() {
      TweenMax.from(increment, 3, {opacity:0, scale:0});
  }

  var waypoint = new Waypoint({
    element: document.querySelector('#tube1'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!!')
      tubeAnime();
    }, offset: 500
  })

  function tubeAnime() {
    TweenMax.from(tubeLogo, 1, {x:-1000,});
    TweenMax.from(tubeLogo, 1, {rotation:360,});
}

var waypoint = new Waypoint({
    element: document.querySelector('#tube2'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!!')
      tubeAnimeB();
    }, offset: 500
  })

  function tubeAnimeB() {
    TweenMax.from(tubeLogoB, 1, {x:-1000, delay:2});
    TweenMax.from(tubeLogoB, 1, {rotation:360, delay:2});
}

var waypoint = new Waypoint({
    element: document.querySelector('#tube3'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!!')
      tubeAnimeC();
    }, offset: 500
  })

  function tubeAnimeC() {
    TweenMax.from(tubeLogoC, 1, {x:1000, delay:3});
    TweenMax.from(tubeLogoC, 1, {rotation:360, delay:3});
}

var waypoint = new Waypoint({
    element: document.querySelector('#tube4'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!!')
      tubeAnimeD();
    }, offset: 500
  })

  function tubeAnimeD() {
    TweenMax.from(tubeLogoD, 1, {x:1000, delay:4});
    TweenMax.from(tubeLogoD, 1, {rotation:360, delay:4});
}



var waypoint = new Waypoint({
    element: lg,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimation(this.element, ["tube_icon"]);
    },offset: 150
  });

  function runAnimation(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animProps = {};
    switch (parent.id) {
        case "lifeG":
        animProps = {x:90, rotation:180, opacity:0};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.to(target, .4, animProps);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('.lifeG'), ["tube_icon"]);
})

  var waypoint = new Waypoint({
    element: tline,
    handler: function(direction) {
      console.log('Graph Anime!!!!!')
      tagAnime();
    },offset: 150
  })

  function tagAnime() {
      TweenMax.from(tline, 1, {y:-500, opacity:0});
  }

  var waypoint = new Waypoint({
    element: tagGraph,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationA(this.element, ["line1"]);
    },offset: 150
  });

  function runAnimationA(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsA = {};
    switch (parent.id) {
        case "tagGra":
        animPropsA = {x:90, opacity:0};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsA);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagGra'), ["line1"]);
})

var waypoint = new Waypoint({
    element: tagGraph,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationB(this.element, ["line2"]);
    },offset: 150
  });

  function runAnimationB(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsB = {};
    switch (parent.id) {
        case "tagGra":
        animPropsB = {x:90, opacity:0, delay:.5};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsB);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagGra'), ["line2"]);
})

var waypoint = new Waypoint({
    element: tagGraph,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationC(this.element, ["line3"]);
    },offset: 150
  });

  function runAnimationC(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsC = {};
    switch (parent.id) {
        case "tagGra":
        animPropsC = {x:90, opacity:0, delay:1};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsC);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagGra'), ["line3"]);
})

var waypoint = new Waypoint({
    element: tagGraph,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationD(this.element, ["linr4"]);
    },offset: 150
  });

  function runAnimationD(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsD = {};
    switch (parent.id) {
        case "tagGra":
        animPropsD = {x:90, opacity:0, delay:1.5};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsD);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagGra'), ["linr4"]);
})

var waypoint = new Waypoint({
    element: tline,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationE(this.element, ["icon"]);
    },offset: 150
  });

  function runAnimationE(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsE = {};
    switch (parent.id) {
        case "tagline":
        animPropsE = {opacity:0, delay:1};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsE);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagline'), ["icon"]);
})

var waypoint = new Waypoint({
    element: tline,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationF(this.element, ["human_icon"]);
    },offset: 150
  });

  function runAnimationF(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsF = {};
    switch (parent.id) {
        case "tagline":
        animPropsF = {x:-1000, opacity:0, delay:1.5};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsF);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagline'), ["human_icon"]);
})

var waypoint = new Waypoint({
    element: tline,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationG(this.element, ["life_jacket"]);
    },offset: 150
  });

  function runAnimationG(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsG = {};
    switch (parent.id) {
        case "tagline":
        animPropsG = {x:-1000, opacity:0, delay:2};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsG);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagline'), ["life_jacket"]);
})

var waypoint = new Waypoint({
    element: tline,
    handler: function(direction) {
      console.log('Scrolled to waypoint!!!234!!');
      runAnimationH(this.element, ["text"]);
    },offset: 150
  });

  function runAnimationH(parent, elements){
    //should run on a waypoint or user interaction
    console.log("run animations here");

    let innerSVG = parent.contentDocument;
    
    //set up animation properties

    let animPropsH = {};
    switch (parent.id) {
        case "tagline":
        animPropsH = {y:-1000, opacity:0, delay:2.5};
        break;

        default:
        //do nothing
        break;
    }

    //simple vector animation with Greensock
    elements.forEach(item => {
        let target = innerSVG.querySelector(`#${item}`);
        TweenMax.from(target, .4, animPropsH);
    })
}

lg.addEventListener("mouseover", function(){
    //debugger;
    //console.log(this);
    runAnimation(this.querySelector('#tagline'), ["text"]);
})

