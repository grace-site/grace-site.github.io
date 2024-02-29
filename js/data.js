//projects array stores values for each project item's name, href, image link, and genre
const projects = [
    {
        name: "Fallen fate | fateful fall",
        url: "/projects/fallen-fate-fateful-fall",
        iconUrl: "/images/icons/fallen00.jpg",
        genre: "installation"
    },
    {
        name: "Seek",
        url: "/projects/seek",
        iconUrl: "/images/icons/seek00.png",
        genre: "coding"
    },
    {
        name: "Ignorance of Idolatrous Knowledge",
        url: "/projects/ignorance-of-idolatrous-knowledge",
        iconUrl: "/images/icons/ignorance00.png",
        genre: "coding"
    },
    {
        name: "Blue Blooms",
        url: "/projects/blue-blooms",
        iconUrl: "/images/icons/blue00.jpg",
        genre: "fine-art"
    },
    {
        name: "Data in Art Dimension",
        url: "/projects/data-in-art-dimension",
        iconUrl: "/images/icons/data00.jpg",
        genre: "installation"
    },
    {
        name: "Beckett",
        url: "/projects/beckett",
        iconUrl: "/images/icons/beckett00.jpg",
        genre: "fine-art"
    },
    {
        name: "Corprio web app",
        url: "/projects/corprio-web-app",
        iconUrl: "/images/icons/corprioweb00.png",
        genre: "coding"
    },
    {
        name: "eis",
        url: "/projects/eis",
        iconUrl: "/images/icons/eis00.png",
        genre: "animation"
    },{
        name: "Switched Match",
        url: "/projects/switched-match",
        iconUrl: "/images/icons/switched00.png",
        genre: "coding"
    },
    {
        name: "Claw Machine",
        url: "/projects/claw-machine",
        iconUrl: "/images/icons/claw00.png",
        genre: "coding"
    },
    {
        name: "Corprio app icons",
        url: "/projects/corprio-app-icons",
        iconUrl: "/images/icons/corprioicons00.png",
        genre: "graphic-design"
    },
    
    {
        name: "A Dream Come True",
        url: "/projects/a-dream-come-true",
        iconUrl: "/images/icons/dream00.jpg",
        genre: "animation"
    },
    {
        name: "Individualist Chess",
        url: "/projects/individualist-chess",
        iconUrl: "/images/icons/individualist00.png",
        genre: "coding"
    },
    {
        name: "Mr. Mould the Moose",
        url: "/projects/mr-mould-the-moose",
        iconUrl: "/images/icons/moose00.jpg",
        genre: "fine-art"
    },
    {
        name: "Venice",
        url: "/projects/venice",
        iconUrl: "/images/icons/venice00.jpg",
        genre: "fine-art"
    },
    {
        name: "For Aunt Muriel",
        url: "/projects/for-aunt-muriel",
        iconUrl: "/images/icons/muriel00.jpg",
        genre: "fine-art"
    },
    {
        name: "Reflection",
        url: "/projects/reflection",
        iconUrl: "/images/icons/reflection00.jpg",
        genre: "fine-art"
    },
    {
        name: "Eve's Bite",
        url: "/projects/eves-bite",
        iconUrl: "/images/icons/eves00.png",
        genre: "animation"
    },
    {
        name: "Swift to Hear",
        url: "/projects/swift-to-hear",
        iconUrl: "/images/icons/swift00.png",
        genre: "graphic-design"
    },
    {
        name: "Book Illustrations",
        url: "/projects/book-illustrations",
        iconUrl: "/images/icons/book00.png",
        genre: "fine-art"
    },
    {
        name: "Wedding Invitation",
        url: "/projects/wedding-invitation",
        iconUrl: "/images/icons/wedding00.jpg",
        genre: "graphic-design"
    },
    {
        name: "Idea Campaign",
        url: "/projects/idea-campaign",
        iconUrl: "/images/icons/idea00.png",
        genre: "graphic-design"
    },
    {
        name: "Inclusion Ambassadors",
        url: "/projects/inclusion-ambassadors",
        iconUrl: "/images/icons/ia00.png",
        genre: "graphic-design"
    },
    {
        name: "IA Logo",
        url: "/projects/ia-logo",
        iconUrl: "/images/icons/logo00.png",
        genre: "graphic-design"
    },
    {
        name: "Clockbeat",
        url: "/projects/clockbeat",
        iconUrl: "/images/icons/clockbeat00.jpg",
        genre: "installation"
    },
    {
        name: "Hole in the Ground",
        url: "/projects/hole-in-the-ground",
        iconUrl: "/images/icons/hole00.jpg",
        genre: "animation"
    },
    {
        name: "Tong",
        url: "/projects/tong",
        iconUrl: "/images/icons/tong00.jpg",
        genre: "animation"
    },
    {
        name: "Cinderella",
        url: "/projects/cinderella",
        iconUrl: "/images/icons/cinderella00.jpg",
        genre: "coding"
    },
    {
        name: "Comb in ati on",
        url: "/projects/combination",
        iconUrl: "/images/icons/combination00.jpg",
        genre: "coding"
    },
    {
        name: "Countdown to Heaven",
        url: "/projects/countdown-to-heaven",
        iconUrl: "/images/icons/countdown00.jpg",
        genre: "installation"
    },
    {
        name: "Nostalgic Moon",
        url: "/projects/nostalgic-moon",
        iconUrl: "/images/icons/nostalgic00.jpg",
        genre: "animation"
    },
    {
        name: "Serialist Origami",
        url: "/projects/serialist-origami",
        iconUrl: "/images/icons/serialist00.jpg",
        genre: "installation"
    },
    {
        name: "Eeyores",
        url: "/projects/eeyores",
        iconUrl: "/images/icons/eeyores00.png",
        genre: "animation"
    },
    {
        name: "Shower Bed",
        url: "/projects/shower-bed",
        iconUrl: "/images/icons/shower00.jpg",
        genre: "animation"
    },
    {
        name: "Bouncy Cylinder",
        url: "/projects/bouncy-cylinder",
        iconUrl: "/images/icons/bouncy00.jpg",
        genre: "animation"
    },
    {
        name: "This website",
        url: "/projects/this-website",
        iconUrl: "/images/icons/website00.png",
        genre: "coding"
    }
];

//renders div of a single project
class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    render() {
        return (
            <div className="portfolio-item-wrapper"
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}>
                <a href={this.props.link}>
                    <div className={`portfolio-img-background ${this.state.hover ? "img-lighten" : ""}`} style={{ backgroundImage: `url(${this.props.image})` }}></div>
                    <div className="subtitle">
                        {this.props.value}
                    </div>
                </a>
            </div>
        );
    }

}

//renders all projects of that genre
function Page(props) {
    let toBeRendered = [];

    projects.forEach(project => {
        if (project.genre === props.genre || (props.genre === "all" && props.genreExclude != project.genre)) {
            if (!props.exception || project.name != props.exception.name) {
                toBeRendered.push(
                    <Project
                        value={project.name}
                        link={project.url}
                        image={project.iconUrl}
                    />
                );
            }
        }
    });

    return (toBeRendered);
}


//appends the appropriate content for each page
const genres = ["all", "coding", "installation", "animation", "graphic-design", "fine-art"]
genres.forEach(genre => {
    const classArray = document.getElementsByClassName(genre + "-wrapper");
    if (classArray.length > 0) {
        ReactDOM.render(<Page genre={genre} exception="none" />, document.querySelector("." + genre + "-wrapper"));

    }
});

//add underline for navbar current page
const currentPage = window.location.pathname;
let toBeUnderlined;
if (currentPage == "/" || currentPage == "/index") {
    toBeUnderlined = "nav-all";
} else {
    let isGenrePage = false;
    genres.forEach(genre => {
        //is a genre page
        if (currentPage == "/" + genre + "") {
            isGenrePage = true;
            toBeUnderlined = "nav-" + genre;
            //appends all other works of the different genres beneath the current page            
            ReactDOM.render(<Page genre="all" genreExclude={genre} />, document.querySelector(".other-works"));
        }
    });
    //is a project page
    if (!isGenrePage) {
        projects.forEach(project => {
            if (currentPage == project.url) {
                toBeUnderlined = "nav-" + project.genre;
                //appends other works of the same genre beneath the current project            
                ReactDOM.render(<Page genre={project.genre} exception={project} />, document.querySelector(".other-works"));

                //title "Other works in the same genre"
                const currentGenre = project.genre.replaceAll('-', ' ');
                const text = <h2>Other works in {currentGenre}</h2>
                ReactDOM.render(text, document.querySelector(".other-works-title"));
            }
        });
    }


}

const tab = document.getElementById(toBeUnderlined);
tab.classList.add('active-dropdown');

