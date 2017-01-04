$(document).ready(function() {
    var links = [{
            "title": "Home",
            "head": "Readable Text!",
            "body": "This HTML page contains no inline styles! The CSS contains many useful semantics that should be insightful when piecing the whole picture together."
        },
        {
            "title": "About Me",
            "head": "About Me",
            "body": "Dolorum nobis nostrum perferendis recusandae delectus accusamus rerum tempore, voluptates soluta. Quaerat omnis explicabo aliquam at, minima rem, quod aut consectetur velit."
        },
        {
            "title": "Contact",
            "head": "Contact",
            "body": "Similique non saepe velit labore pariatur, quo iusto in id excepturi, debitis tempora, porro suscipit commodi explicabo mollitia quaerat impedit ex praesentium."
        },
    ];
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
