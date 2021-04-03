// other pages component
import Register from "./landingPage/register/index";
import APIKeys from "./landingPage/APIKeys/index";
import Playground from "./landingPage/playground/index";
import APIDocs from "./landingPage/APIDocs/index";
import Feedback from "./landingPage/feedback/index";
import Support from "./landingPage/support/index";

export default function SignUp() {
  return (
    <div>
      <Register />
      <APIKeys />
      <Playground />
      <APIDocs />
      <Feedback />
      <Support />
    </div>
  );
}
