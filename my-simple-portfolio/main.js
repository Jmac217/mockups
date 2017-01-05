$(document).ready(function() {
    var links = [{
            "title": "Home",
            "head": "Readable Text!",
            "body": "This HTML page contains no inline styles! The CSS contains many useful semantics that should be insightful when piecing the whole picture together."
        },
        {
            "title": "About Me",
            "head": "About Me",
            "body": "I <3 CSS"
        },
        {
            "title": "Contact",
            "head": "Contact",
            "body": "jordanelder10@gmail.com"
        },
        {
            "title": "Extra",
            "head": "Easily added in JSON",
            "body": "Similique non saepe velit labore pariatur, quo iusto in id excepturi, debitis tempora, porro suscipit commodi explicabo mollitia quaerat impedit ex praesentium."
        },
    ];
    $.each(links, function(k, v){
       $('nav > ul').append(`
         <li><a href="#" class="note">`+v.title+`</a></li>
       `);
    });
    $("a").click(function() {
        for (let i of links) {
            if (i.title === $(this).text()) {
                $("#content").html(`
          <div class="card">
            <h2>` + i.title + `</h2>
            <h3>` + i.head + `</h3>
            <p>` + i.body + `</p>
          </div>
        `);
            }
        }
    });
});
