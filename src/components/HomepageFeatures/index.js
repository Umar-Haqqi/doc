import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  // {
  //   title: 'Easy to Use',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

// function Feature({ Svg, title, description }) {
//   return (
//     // <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
//     //   <div style="text-align: center;">
//     //     <img
//     //       src="/img/your-image1.png"
//     //       alt="Description 1"
//     //       style={{ width: "200px", borderRadius: "20px" }}
//     //     />
//     //     <p>Follow simple instructions for successful verification</p>
//     //   </div>

//     //   <div style="text-align: center;">
//     //     <img
//     //       src="/img/your-image1.png"
//     //       alt="Description 1"
//     //       style={{ width: "200px", borderRadius: "20px" }}
//     //     />
//     //     <p>Take a clear and proper photo to get verified</p>
//     //   </div>

//     //   <div style="text-align: center;">
//     //     <img
//     //       src="/img/your-image1.png"
//     //       alt="Description 1"
//     //       style={{ width: "200px", borderRadius: "20px" }}
//     //     />
//     //     <p>Fully Automated Identity Verification with NFC</p>
//     //   </div>

//     //   <div style="text-align: center;">
//     //     <img
//     //       src="/img/your-image1.png"
//     //       alt="Description 1"
//     //       style={{ width: "200px", borderRadius: "20px" }}
//     //     />
//     //     <p>Enhance customer experience with swift verification</p>
//     //   </div>
//     // </div>
//   );
// }

export default function HomepageFeatures() {
  return (
    // <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
    //   <div style="text-align: center;">
    //     <img
    //       src="/img/your-image1.png"
    //       alt="Description 1"
    //       style={{ width: "200px", borderRadius: "20px" }}
    //     />
    //     <p>Follow simple instructions for successful verification</p>
    //   </div>

    //   <div style="text-align: center;">
    //     <img
    //       src="/img/your-image1.png"
    //       alt="Description 1"
    //       style={{ width: "200px", borderRadius: "20px" }}
    //     />
    //     <p>Take a clear and proper photo to get verified</p>
    //   </div>

    //   <div style="text-align: center;">
    //     <img
    //       src="/img/your-image1.png"
    //       alt="Description 1"
    //       style={{ width: "200px", borderRadius: "20px" }}
    //     />
    //     <p>Fully Automated Identity Verification with NFC</p>
    //   </div>

    //   <div style="text-align: center;">
    //     <img
    //       src="/img/your-image1.png"
    //       alt="Description 1"
    //       style={{ width: "200px", borderRadius: "20px" }}
    //     />
    //     <p>Enhance customer experience with swift verification</p>
    //   </div>
    // </div>
    <section className={styles.features} >
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
