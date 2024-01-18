//projects array stores values for each project item's name, href, image link, and genre
const projects = [

    ["Fallen fate | fateful fall",
    "/projects/fallen-fate-fateful-fall.html",
    "/images/icons/fallen00.jpg",
    "installation"],

    ["Seek",
    "/projects/seek.html",
    "/images/icons/seek00.png",
    "coding"],
    
    ["Ignorance of Idolatrous Knowledge", 
    "/projects/ignorance-of-idolatrous-knowledge.html", 
    "/images/icons/ignorance00.png", 
    "coding"],

    ["Blue Blooms",
    "/projects/blue-blooms.html",
    "/images/icons/blue00.jpg",
    "fine-art"],

    ["Data in Art Dimension",
    "/projects/data-in-art-dimension.html",
    "/images/icons/data00.jpg",
    "installation"],

    ["Beckett",
    "/projects/beckett.html",
    "/images/icons/beckett00.jpg",
    "fine-art"],

    ["Cinderella",
    "/projects/cinderella.html",
    "/images/icons/cinderella00.jpg",
    "coding"],

    ["Comb in ati on",
    "/projects/combination.html",
    "/images/icons/combination00.jpg",
    "coding"],

    ["Countdown to Heaven",
    "/projects/countdown-to-heaven.html",
    "/images/icons/countdown00.jpg",
    "installation"],

    ["Nostalgic Moon",
    "/projects/nostalgic-moon.html",
    "/images/icons/nostalgic00.jpg",
    "animation"],

    ["Serialist Origami",
    "/projects/serialist-origami.html",
    "/images/icons/serialist00.jpg",
    "installation"],

    ["Eeyores",
    "/projects/eeyores.html",
    "/images/icons/eeyores00.png",
    "animation"],

    ["eis",
    "/projects/eis.html",
    "/images/icons/eis00.png",
    "animation"],

    ["A Dream Come True",
    "/projects/a-dream-come-true.html",
    "/images/icons/dream00.jpg",
    "animation"],

    ["Claw Machine",
    "/projects/claw-machine.html",
    "/images/icons/claw00.png",
    "coding"],

    ["Switched Match",
    "/projects/switched-match.html",
    "/images/icons/switched00.png",
    "coding"],

    ["Individualist Chess",
    "/projects/individualist-chess.html",
    "/images/icons/individualist00.png",
    "coding"],

    ["Tong",
    "/projects/tong.html",
    "/images/icons/tong00.jpg",
    "animation"],

    ["Mr. Mould the Moose",
    "/projects/mr-mould-the-moose.html",
    "/images/icons/moose00.jpg",
    "fine-art"],

    ["Venice",
    "/projects/venice.html",
    "/images/icons/venice00.jpg",
    "fine-art"],

    ["For Aunt Muriel",
    "/projects/for-aunt-muriel.html",
    "/images/icons/muriel00.jpg",
    "fine-art"],

    ["Reflection",
    "/projects/reflection.html",
    "/images/icons/reflection00.jpg",
    "fine-art"],

    ["Eve's Bite",
    "/projects/eves-bite.html",
    "/images/icons/eves00.png",
    "animation"],

    ["Book Illustrations",
    "/projects/book-illustrations.html",
    "/images/icons/book00.png",
    "fine-art"],
    
    ["Wedding Invitation",
    "/projects/wedding-invitation.html",
    "/images/icons/wedding00.jpg",
    "graphic-design"],

    ["Idea Campaign",
    "/projects/idea-campaign.html",
    "/images/icons/idea00.png",
    "graphic-design"],

    ["Inclusion Ambassadors",
    "/projects/inclusion-ambassadors.html",
    "/images/icons/ia00.png",
    "graphic-design"],

    ["Swift to Hear",
    "/projects/swift-to-hear.html",
    "/images/icons/swift00.png",
    "graphic-design"],

    ["IA Logo",
    "/projects/ia-logo.html",
    "/images/icons/logo00.png",
    "graphic-design"],

    ["Clockbeat",
    "/projects/clockbeat.html",
    "/images/icons/clockbeat00.jpg",
    "installation"], 

    ["Hole in the Ground",
    "/projects/hole-in-the-ground.html",
    "/images/icons/hole00.jpg",
    "animation"],

    ["Shower Bed",
    "/projects/shower-bed.html",
    "/images/icons/shower00.jpg",
    "animation"],

    ["Bouncy Cylinder",
    "/projects/bouncy-cylinder.html",
    "/images/icons/bouncy00.jpg",
    "animation"], 

    ["This website",
    "/projects/this-website.html",
    "/images/icons/website00.png",
    "coding"]

];

//renders div of a single project
class Project extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hover: false
        };
    }
    render(){
        return(
            <div className="portfolio-item-wrapper" 
            onMouseEnter = {()=> this.setState({hover:true})} 
            onMouseLeave = {()=> this.setState({hover:false})}>
                <a href={this.props.link}>
                    <div className={`portfolio-img-background ${this.state.hover ? "img-lighten": ""}`} style={{backgroundImage: `url(${this.props.image})`}}></div>
                    <div className ="subtitle">
                        {this.props.value}
                    </div>
                </a>            
            </div>
    );
    }
    
}

//renders all projects of that genre
function Page(props){
    let toBeRendered = [];

    projects.forEach(project => {
        if(project[3] === props.genre || props.genre === "all"){
            if(project[0] != props.exception[0]){
                toBeRendered.push(
                    <Project
                        value = {project[0]}
                        link = {project[1]}
                        image = {project[2]}
                    />
                );
            }
        }
    });

    return(toBeRendered);       
}


//appends the appropriate content for each page
const genres = ["all", "coding", "installation", "animation", "graphic-design", "fine-art"]
genres.forEach(genre => {
    const classArray = document.getElementsByClassName(genre +"-wrapper");
    if (classArray.length > 0){
        ReactDOM.render(<Page genre = {genre} exception = "none"/>, document.querySelector("." + genre + "-wrapper"));
        
    }
});

//add underline for navbar current page
const currentPage = window.location.pathname;
let toBeUnderlined;
if (currentPage == "/" || currentPage == "/index.html"){
    toBeUnderlined = "nav-all";
} else{
    genres.forEach(genre => {
        if(currentPage == "/"+ genre +".html"){
            toBeUnderlined = "nav-" + genre;
        }
    });
    projects.forEach(project => {
        if(currentPage == project[1]){
            toBeUnderlined = "nav-" + project[3];
            //appends other works of the same genre beneath the current project            
            ReactDOM.render(<Page genre = {project[3]} exception = {project}/>, document.querySelector(".other-works"));

            //title "Other works in the same genre"
            const currentGenre = project[3].replaceAll('-', ' ');
            const text = <h2>Other works in {currentGenre}</h2>
            ReactDOM.render(text, document.querySelector(".other-works-title"));
        }
    });

}

const tab = document.getElementById(toBeUnderlined);
tab.classList.add('active-dropdown');

