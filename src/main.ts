import { auth } from './auth/auth'
import { App } from './components/App'
import './style.css'

void auth().then(() => App.appendTo(document.body).render())
