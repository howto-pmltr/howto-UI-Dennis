//  OBJECTS

const app = [{
    name: 'HowTo',
    tagLine: 'minimal. informative',
}, {
    fontEnd: ['React', 'redux', 'logger', 'thunk', 'material-ui'],
    backEnd: ['Express', 'knex', 'pg', 'jsonwebtoken', 'bcryptjs', 'jest', 'supertest']
}];


const team = [{
    firstName: 'Leland',
    lastName: 'Rogers',
    dataSet: 'teamLeader',
    role: 'Team Leader',
    github: 'https://github.com/ltrii'
}, 
{
    firstName: 'Isaiah',
    lastName: 'Francois',
    dataSet: 'webui',
    role: 'Web UI Developer I',
    github: 'https://github.com/FrancoisCoding'
},
{
    firstName: 'Levi',
    lastName: 'Thomas',
    dataSet: 'webui',
    role: 'Web UI Developer II',
    github: 'https://github.com/TheLessonHere'
},
{
    firstName: 'Dennis',
    lastName: 'Mercado',
    dataSet: 'webui',
    role: 'Web UI Developer III',
    github: 'https://github.com/denmercs'
},
{
    firstName: 'Andy',
    lastName: ' Bettisworth',
    dataSet: 'backEnd',
    role: 'Back End Developer',
    github: 'https://github.com/wurde'
},
{
    firstName: 'Jarred',
    lastName: 'Stanford',
    dataSet: 'frontEnd',
    role: 'Front End Developer',
    github: 'https://github.com/clem9281'
}];

document.addEventListener('DOMContentLoaded',function(){
        // TEMPLATE
    let cards = document.querySelector('.cards');

    for(let i = 0; i < team.length; i++) {
        div = document.createElement('div');
        div.innerHTML = `
            <div class="card-info">
                <img src="./img/img-${team[i].firstName}.png" alt="${team[i].firstName} ${team[i].lastName}">
                <h3>${team[i].firstName} ${team[i].lastName}</h3>
                    <p>${team[i].role}</p>
                    <a href="${team[i].github}"><i class="fab fa-github"></i></a> 
                </div>            
            </div>
            `;
        div.setAttribute("class", "card");
        div.setAttribute("data-tab", `${team[i].dataSet}`);        
        cards.appendChild(div);
    }


    // COMPONENTS ~ CAROUSEL
    class Carousel {
        constructor(carousel) {
            this.carousel = carousel;

            this.rightBtn = this.carousel.querySelector('.right-button');
            this.leftBtn = this.carousel.querySelector('.left-button');
            this.images = this.carousel.querySelectorAll('img');
            
            this.index = 0;
            
            this.leftBtn.addEventListener('click', () => this.moveLeft());
            this.rightBtn.addEventListener('click', () => this.moveRight());
        }

        moveLeft() {
            this.images.forEach(img => img.classList.remove('img-show'));
            this.index--;
            if(this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.images[this.index].classList.add('img-show');
        }

        moveRight() {
            this.images.forEach(img => img.classList.remove('img-show'));
            this.index++;
            if(this.index > this.images.length - 1) {
                this.index = 0;
            }
            this.images[this.index].classList.add('img-show');
        }
    }

    class TabLink {
        constructor(tabElement) {
            this.tabElement = tabElement;
            this.tabData = this.tabElement.dataset.tab;

            if(this.tabData === "all") {
                this.cards = document.querySelectorAll('.card');
            } else {
                this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
            }

            this.cards = Array.from(this.cards).map(card => new TabCard(card));
            this.tabElement.addEventListener('click', () => this.selectTab());
        }
        
        selectTab() {
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(card => card.classList.remove('.active-tab'));

            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => card.style.display = "none");
            this.tabElement.classList.add('active-tab');
            this.tabElement.classList.add('element');
            this.cards.forEach(card => card.selectCard());

        }
    }

    class TabCard {
        constructor(cardElement) {
            this.cardElement = cardElement;
        }

        selectCard() {
            this.cardElement.style.display = "flex";
        }
    }



    let carousel = document.querySelector('.carousel');
    carousel = new Carousel(carousel);

    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => new TabLink(tab));

    /** ANIMATION */
    let slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: 0,
        delay: 500
    };



    ScrollReveal().reveal('.about', slideUp);
    ScrollReveal().reveal('.tab', slideUp);
    ScrollReveal().reveal('.cards', slideUp);
});

