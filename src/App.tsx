import React from 'react';
import PreviewBlock from "./components/previewBlock";
import {ISiPackage} from "./models/PackageModel";
import Carousel from "./components/UI/Carousel/Carousel";
import Chunk from "./components/TopSection/Chunk";

function App() {
    const PackageTest:ISiPackage = {title:"23", id:32, file:"", img_src:""}
    const PackagesTest:ISiPackage[] = []
    for (let i = 0; i < 133; i++) {
        PackagesTest.push(PackageTest)
    }
    console.log(PackagesTest)
  return (
    <div className="App">
        <div className="wrapper">
            <div className="menu">
                sss
            </div>
            <div className="featuredPacks">
                <Carousel>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                </Carousel>
            </div>
            <div className={"body"}>
                <Chunk SiPacks={PackagesTest} pos={1}/>
            </div>
        </div>
    </div>
  );
}

export default App;
