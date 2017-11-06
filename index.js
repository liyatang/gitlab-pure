(function () {
    function switchClassName() {
        const cn = document.body.className;

        if (cn.indexOf('gitlabpure') > -1) {
            document.body.className = cn.replace('gitlabpure', '');
        } else {
            document.body.className = cn + ' gitlabpure';
        }
    }

    const div = document.createElement('div');

    div.style.position = "fixed";
    div.style.bottom = '10px';
    div.style.right = '10px';
    div.style.zIndex = '10000';
    div.style.cursor = 'pointer';

    div.innerHTML = 'pure';

    div.onclick = switchClassName;

    document.body.appendChild(div);


    switchClassName();
})();