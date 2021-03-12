var reverse = document.getElementById('button');
        var ul = document.getElementById('ul');
        var counter = 0;

        reverse.addEventListener('click', function () {
            counter++;
            if (counter % 2 === 1) {
                ul.className = 'reverse';
            } else {
                ul.className = 'normal';
            }
        })