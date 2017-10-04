const request = (method, url, data, callback) => {
    const XHR = new XMLHttpRequest();

    XHR.withCredentials = true;

    XHR.addEventListener("load", function(event) {
        const response = JSON.parse(event.target.responseText);
        if (event.target.status == 200) {
            callback(null, response);
        } else {
            callback(response.message || response.text || response.status);
        }
    });

    XHR.addEventListener("error", function(event) {
        callback(new Error(), event.target.responseText);
    });

    XHR.open(method, url);

    if(data) {
      XHR.setRequestHeader('Content-Type', 'application/json');
    }

    XHR.send(JSON.stringify(data));
}

const formData = (form) => {

}
