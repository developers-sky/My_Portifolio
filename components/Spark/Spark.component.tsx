import React from "react";

import Link from "next/link";

const spark: React.FC = () => {
  return (
    <div>
    <div className="my-16 px-3 font-sen" id="spark">
      <p className="text-3xl font-bold text-green-600">Something fun!</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <div><iframe width="400" height="300" frameBorder="0" src="https://cdn.abowman.com/widgets/fish/fish.html?up_backgroundColor=e11d48&up_numFish=5&up_up_fishColor1=e46701&up_fishColor2=1ed25d&up_fishColor3=178de8&up_fishColor4=f5a499&up_fishColor5=8af443&up_fishColor6=f4bc43&up_fishColor7=e5df24&up_fishColor8=f45540&up_fishColor9=f45540&up_fishColor10=f45540"></iframe></div>
      </div>
      </div>
      <br/>
      <p className="text-3xl font-bold text-pink-800">listen something.....✨</p>
      <br/>
      <div> <div><iframe src="https://open.spotify.com/embed/playlist/222sxdLK9rmrtamjSDN7rq?utm_source=generator" width="90%" height="300" frameBorder="200"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    </div>
      </div>
             );
    };
    
    export default spark;