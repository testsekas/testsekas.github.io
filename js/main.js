/*global framework: null, $: null*/

// ===========================
// DEFINE ROUTING
// ===========================

framework.route('/', view_homepage, []);
framework.route('/about/', view_about, []);
framework.route('/collections/{collection_id}', view_contact, []);

// ===========================
// DEFINE VIEWS
// ===========================

function view_homepage() {
  $.get('homepage.html', function (data) {
    $('#content').replaceWith($(data));
  });
}

function view_about() {
  $.get('about.html', function (data) {
    alert(data);
    $('#content').replaceWith($(data));
  });
}

function view_contact() {
  $('#content').html('<div style="color:#967ADC">CONTACT<br /><b>Look into URL address bar</b>.</div>');
}

// ===========================
// DEFINE EVENTS
// ===========================



framework.on('ready', function() {
  $('.link').on('click', 'a', function(e) {
    e.preventDefault();
    e.stopPropagation();
    framework.redirect($(this).attr('href'));
  });
  framework.redirect('/');
});

framework.on('location', function(url) {
  var menu = $('.menu');
  menu.find('.selected').removeClass('selected');
  menu.find('a[href="' + url + '"]').parent().addClass('selected');
});
