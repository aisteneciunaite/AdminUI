import './assets/styles/app.scss';
import './assets/icons/card_giftcard-24px.svg';
import './assets/icons/extension-24px.svg';
import './assets/icons/face-24px.svg';
import './assets/icons/find_in_page-24px.svg';
import './assets/icons/folder_open-24px.svg';
import './assets/icons/format_paint-24px.svg';
import './assets/icons/home-24px.svg';
import './assets/icons/mail-24px.svg';
import './assets/icons/map-24px.svg';
import './assets/icons/menu-24px.svg';
import './assets/icons/more_horiz-24px.svg';
import './assets/icons/notification_important-24px.svg';
import './assets/icons/pan_tool-24px.svg';
import './assets/icons/pie_chart-24px.svg';
import './assets/icons/search-24px.svg';
import './assets/icons/show_chart-24px.svg';
import './assets/icons/text_fields-24px.svg';
import './assets/icons/track_changes-24px.svg';
import './assets/icons/view_list-24px.svg';
import './assets/images/keyboard_arrow_right-24px.svg';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());