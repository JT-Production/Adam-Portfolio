const Footer = () => {
  return (
    <center>
      <footer
        className="w-9/12 bg-zinc-900  border-t border-zinc-800"
        style={{ background: "#0a0a0a51" }}
        id="contact"
      >
        <div className="grid lg:grid-cols-3 items-center heading pb-4 ">
        <div className=" grow-0 lg:text-start lg:order-0 order-1 text-zinc-400 pt-4 text-center">Copyright © 2025 Adam Bitcoin.
        </div>
          <div className="flex justify-center items-center gap-8  pt-4">
            <a href="https://x.com/@AdamBitcoinP2P1" className="text-white text-lg" style={{ color: "#FF8C00" }}>
              Twitter
            </a>
            <a href="https://t.me/AdamBitcoinChat" className="text-white text-lg" style={{ color: "#FF8C00" }}>
              Telegram
            </a>
            <a href="https://youtube.com/@AdamBitcoinP2P1" className="text-white text-lg" style={{ color: "#FF8C00" }}>
              Instagram
            </a>
            <a href="https://tiktok.com/@AdamBitcoinP2P1" className="text-white text-lg" style={{ color: "#FF8C00" }}>
              Tiktok
            </a>
          </div>
        </div>
      </footer>
    </center>
  );
};

export default Footer;
