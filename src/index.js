import _ from 'lodash';
import './style.css';
import Icon from './1.jpg';

function component() {
	
	var element = document.createElement('div');

	element.innerHTML = _.join(['hello', '123'], ' ');

	var myIcon = new Image();
  
    myIcon.src = Icon;

    element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());