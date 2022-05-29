const form  = document.getElementById('displayForm');

form.addEventListener('submit', (event) => {

    var jT = document.getElementById('journeyType');
    var jtID = jT.value;

    var pr = document.getElementById('priceRange');
    var prID = pr.value;

    if (jtID == "temp" && prID == "temp") {
        document.getElementById('number1').style.display = "block";
        document.getElementById('number2').style.display = "none";
    }
    else if (jtID == "temp" || prID == "temp") {
        alert('Please Select on both Fields!');
    }
    else {

        if (jtID == "1" && prID == "1") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=6e773ad2-ee14-4f54-8254-5cc7ee50ee7c&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "1" && prID == "2") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=2cd0e015-7743-4b29-855d-244b4526afcd&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "2" && prID == "1") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=2ae9eeeb-3e8d-4b8e-bbde-0b28dcd6a8f3&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "2" && prID == "2") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=080480f0-e421-44ae-83df-d7ffaa11323c&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "3" && prID == "1") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=5adbab37-717d-4503-b022-211bf212ffd7&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (jtID == "3" && prID == "2") {
            document.getElementById('iFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=a75412ab-8708-4911-a4ed-892b6917e3c3&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }

        document.getElementById('number1').style.display = "none";
        document.getElementById('number2').style.display = "block";
    }

    event.preventDefault();
});