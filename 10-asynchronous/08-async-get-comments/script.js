// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        await window.lib.getPosts()
            .then(async (articles) => {
                for (let article of articles) {
                    await window.lib.getComments(article.id)
                        .then(async (comment) => {
                            article.comments = comment;
                            await console.log(article);
                        })
                }
            })
    })
})();
