import { createRouter, createWebHistory } from 'vue-router';
import Cars from './pages/Cars';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReusableModal from './pages/ReusableModal';
import Chat from './pages/Chat';
import store from './store/index';
import UserCrud from './pages/UserCrud';
import Tensorflow from "./pages/Tensorflow";

const routes = [
  { path: "/cars", component: Cars, meta: { middleware: "auth" } },
  { path: "/calendar", component: Calendar, meta: { middleware: "auth" } },
  { path: "/", component: Home },
  { path: "/markdown", component: Markdown, meta: { middleware: "auth" } },
  { path: "/slider", component: Slider, meta: { middleware: "auth" } },
  { path: "/calculator", component: Calculator, meta: { middleware: "auth" } },
  {
    path: "/reusable-modal",
    component: ReusableModal,
    meta: { middleware: "auth" },
  },
  {
    path: "/chat",
    component: Chat,
    meta: { middleware: "auth" },
  },
  {
    path: "/user-crud",
    component: UserCrud,
    meta: { middleware: "auth" },
  },
  { path: "/tensorflow", component: Tensorflow},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next({ path: '/' });
    }
  } else {
    next();
  }
});
export default router;
