import {gsap} from "~/assets/js/gsap.min";
import {ScrollTrigger} from "~/assets/js/ScrollTrigger.min";
import {ScrollToPlugin} from "~/assets/js/ScrollToPlugin.min";
import {SplitText} from "~/assets/js/SplitText.min";

export default (ctx, inject) => {
  inject('gsap', gsap);

  gsap.config({
    trialWarn: false
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(SplitText);
  inject('ScrollTrigger', ScrollTrigger);
  inject('SplitText', SplitText);
}
