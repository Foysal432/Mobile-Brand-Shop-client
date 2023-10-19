
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-400 rounded-md text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">New Phone</a> 
    <a className="link link-hover">Laptop</a> 
    <a className="link link-hover">Computer</a> 
    <a className="link link-hover">Camera</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
  
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <img src="https://i.ibb.co/2sYRLtr/logo.webp" alt="" />
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="youremail@gmail.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Send</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;