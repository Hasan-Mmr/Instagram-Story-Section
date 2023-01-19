const story = document.querySelector('.story');
const profileContainer = document.querySelector('.profile-container');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => handleClick(1));
arrowRight.addEventListener('click', ()=> handleClick(-1));

let currentX = 0;

function handleClick(val) {
    const storyRet = story.offsetWidth;
    console.log(storyRet)
    const profileRect = profileContainer.scrollWidth;
    const offset = (profileRect - storyRet) * -1 - 32;
    currentX += (  storyRet * .8 * val);
    console.log(`current: ${currentX} --- story: ${storyRet} --- profile: ${profileRect}`);
    if (  currentX > 0  ) currentX = 0;
    if ( currentX < offset ) currentX = offset ;
    profileContainer.style.left = currentX + 'px';
    
}
