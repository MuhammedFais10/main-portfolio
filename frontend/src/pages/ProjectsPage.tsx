import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import FullstackProject from "@/components/FullstackProject";
import FrontendProject from "@/components/FrontendProject";

function ProjectsPage() {
  const [selected, setSelected] = useState("fullstack");
  const navigate = useNavigate();
  return (
    <section className="py-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            All Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse all my frontend and fullstack apps below.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <Button 
          
            className="hover:bg-primary/10 "
            variant={selected === "fullstack" ? "default" : "outline"}
                       onClick={() => {
    setSelected("fullstack");
  
  }}
          >
            Fullstack Apps
          
          </Button>
          <Button
            className="  hover:bg-primary/10 "
            variant={selected === "frontend" ? "default" : "outline"}
              onClick={() => {
    setSelected("frontend");
   
  }}
          >
            Frontend Apps
          </Button>
        </div>


        {/* Your filtered projects will go here */}
        {/* Example:
        {ProjectLinks.filter(p => p.type === selected).map(...)}
        */}
      </div>
        {selected === "fullstack" ? <FullstackProject /> : <FrontendProject />}
       
      
    </section>
  );
}

export default ProjectsPage;
