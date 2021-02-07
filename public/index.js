$(document).ready(function () {
  $mySites = $('#my-sites');


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
