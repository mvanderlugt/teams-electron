import {app} from 'electron';
import TrayApplication from '@mvanderlugt/electron-wrapper/dist/TrayApplication';

const main = new TrayApplication(app, 'Gmail', 'https://mail.google.com/mail');
main.launch()
