export {
    sendPage
};

async function sendPage(url, htmlData) {

    return await fetch(url, {
            method: "POST",
            //mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "text/html"
            },
            body: htmlData
        }
    ).then(res => {
        if (res.ok)
            browser.runtime.sendMessage({method: "ui.processEnd"});
        else
            browser.runtime.sendMessage({method: "ui.processError"});
    });
}