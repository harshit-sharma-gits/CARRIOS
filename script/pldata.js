const form  = document.getElementById('playForm');

form.addEventListener('submit', (event) => {

    var pl = document.getElementById('plot');
    var plID = pl.value;

    if (plID == "temp") {
        document.getElementById('play1').style.display = "block";
        document.getElementById('play2').style.display = "none";
        document.getElementById('foot').style.position = "fixed";
        document.getElementById('foot').style.bottom = "0";
        document.getElementById('foot').style.left = "0";
        document.getElementById('foot').style.width = "100%";
    }
    else {

        if (plID == "1") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=7c5d4cf1-acd2-46b9-ac2b-faa7a47cd3c3&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "2") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=5ebf2876-8c13-478e-a5b7-75ce443f29d5&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "3") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=bdf801f7-2032-470d-b0ed-929275d4a426&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "4") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=50dbb80d-f418-47e3-8128-5177e682f2ec&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "5") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=1c8f06cb-37f5-47c7-a624-d9a0cfa02db1&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }
        else if (plID == "6") {
            document.getElementById('playFrame').setAttribute('src',"https://app.powerbi.com/reportEmbed?reportId=ff41ce26-bd39-4123-b23f-bcaf1dca61b4&autoAuth=true&ctid=242d5969-d4ad-4e47-9c9c-8af18d85fa02&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9");
        }

        document.getElementById('play1').style.display = "none";
        document.getElementById('play2').style.display = "block";

        document.getElementById('foot').style.marginTop = "50px";
        document.getElementById('foot').style.position = "relative";
    }

    event.preventDefault();
});