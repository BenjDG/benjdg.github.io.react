$(document).ready(function () {
  $mySites = $('#my-sites');

  const data = [
    {
      idWord: 'note',
      imgSrc: './Assets/Images/leave-a-note.PNG',
      siteTitle: 'Leave A Note',
      siteDescription:
        'Developed in a team, this full-stack application allows users signup, login, and leave a note for their groups. It also allows them to view notes left for them by other users in their group.',
      url: 'https://project-leave-a-note.herokuapp.com/',
      github: 'https://github.com/BenjDG/Leave_A_Note',
      tech: [
        'Node.js',
        'Express.js',
        'Sequelize',
        'MySql',
        'Git',
        'Heroku',
        'CICD',
        'Semistandard.js',
        'Passport.js',
        'Handlebars.js'
      ]
    },
    {
      idWord: 'travel',
      imgSrc: './Assets/Images/travel-planner.png',
      siteTitle: 'Travel Planner',
      siteDescription:
        'Developed in a team, this web application retrieves different information about a location. It includes information about the weather forecast upcoming events, and a map of the location.',
      url: 'https://benjdg.github.io/Travel_App/',
      github: 'https://github.com/BenjDG/Travel_App',
      tech: [
        'Day.js',
        'Bulma',
        'jQuery',
        'Font Awesome',
        'Google Fonts',
        'Google Maps API',
        'Ticketmaster API',
        'OpenWeather API'
      ]
    },
    {
      idWord: 'workday',
      imgSrc: './Assets/Images/work-day.PNG',
      siteTitle: 'Work Day Scheduler',
      siteDescription:
        'This is a web application that locally persists events into a work day scheduler.',
      url: 'https://benjdg.github.io/05_Work_Day_Scheduler/',
      github: 'https://github.com/BenjDG/05_Work_Day_Scheduler',
      tech: ['Day.js', 'Bulma', 'jQuery', 'Font Awesome', 'Open Weather API']
    },
    {
      idWord: 'weather',
      imgSrc: './Assets/Images/weather-dashboard.PNG',
      siteTitle: 'Weather Dashboard',
      siteDescription:
        'This weather dashboard gives you the current and 5-day forecast for a city. It also saves your recent weather searches.',
      url: 'https://benjdg.github.io/06_Weather_Dashboard/',
      github: 'https://github.com/BenjDG/06_Weather_Dashboard',
      tech: ['Day.js', 'Bulma', 'jQuery', 'Font Awesome', 'Open Weather API']
    },
    {
      idWord: 'burger',
      imgSrc: './Assets/Images/burger.PNG',
      siteTitle: 'Eat the Burger',
      siteDescription:
        'This app takes names of burgers and saves them to a database. Then you can virtually eat the burgers and the database record will be updated and the item moved to a different list.',
      url: 'https://polar-hamlet-57397.herokuapp.com/',
      github: 'https://github.com/BenjDG/13_Eat_Da_Burger_App',
      tech: [
        'Node.js',
        'Express.js',
        'MySql',
        'MVC',
        'ORM',
        'Handlebars',
        'Heroku'
      ]
    }
  ];

  data.forEach(obj => {
    cardFactory(obj);
  });

  function cardFactory(arr) {
    $colMainDiv = $('<div>').attr('class', 'col mb-4');

    $cardDiv = $('<div>').attr({
      id: arr.idWord,
      class: 'card'
    });
    $img = $('<img>').attr({
      src: arr.imgSrc,
      alt: 'picture of website',
      class: 'card-img-top border-0'
    });
    $img.appendTo($cardDiv);
    $cardDiv.appendTo($colMainDiv);
    $cardWrapper = $('<div>').attr('class', 'card-body');
    $cardTitle = $('<h5>').attr('class', 'card-title').text(arr.siteTitle);
    $cardText = $('<p>').attr('class', 'card-text').text(arr.siteDescription);
    $cardTitle.appendTo($cardWrapper);
    $cardText.appendTo($cardWrapper);
    $cardWrapper.appendTo($cardDiv);
    $cardFooterWrap = $('<div>').attr('class', 'card-footer border-0');
    $cardFooterTitle = $('<h6>')
      .attr('class', 'card-title')
      .text('Technologies');
    $cardTechList = $('<ul>');

    $liveBtn = $('<button>').attr({
      type: 'button',
      class: 'btn btn-primary m-1'
    }).text('Deployed Site');

    $codeBtn = $('<button>').attr({
      type: 'button',
      id: `${arr.idWord}-code-button`,
      class: 'btn btn-danger m-1'
    }).text('Show me code');

    arr.tech.forEach(item => {
      $cardListItem = $('<li>').text(item);
      $cardListItem.appendTo($cardTechList);
    });
    $cardFooterTitle.appendTo($cardFooterWrap);
    $cardTechList.appendTo($cardFooterWrap);
    $liveBtn.appendTo($cardFooterWrap);
    $codeBtn.appendTo($cardFooterWrap);
    $cardFooterWrap.appendTo($cardWrapper);
    $colMainDiv.appendTo($mySites);
    $(`#${arr.idWord}`).on('click', function () {
      window.location = arr.url;
    });
    $(`#${arr.idWord}-code-button`).on('click', function (e) {
      e.stopPropagation();
      window.location = arr.github;
    });
  }
});
