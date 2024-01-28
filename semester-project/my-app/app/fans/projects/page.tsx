import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import "../../about-hs/composition.css";
function Home() {
  return (
    <main>
      <h1>FAN PROJECTS</h1>
      <div className="mainContainer">
        <div className="container">
          {" "}
          <div className="basic-info">
            <h1 className="subTitle">HARRY STYLES</h1>

            <div className="photo">
                <Image
                  src="/harrystyles_cover.svg"
                  alt="imageHScover"
                  width={200}
                  height={200}
                  priority
                />
            </div>
            <p className="year">2017.</p>
          </div>
        </div>
        <div className="basic-info">
          <h1 className="subTitle">HARRY STYLES</h1>

          <div className="photo">

              <Image
                src="/harrystyles_cover.svg"
                alt="imageHScover"
                width={200}
                height={200}
                priority
              />
          </div>
          <p className="year">2017.</p>
        </div>

        <div className="container"></div>
        <div className="container"></div>
      </div>
    </main>
  );
}

export default Home;
