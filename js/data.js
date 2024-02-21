//projects array stores values for each project item's name, href, image link, and genre
const projects = [
    {
        name: "Fallen fate | fateful fall",
        url: "/projects/fallen-fate-fateful-fall.html",
        iconUrl: "/images/icons/fallen00.jpg",
        genre: "installation"
    },
    {
        name: "Seek",
        url: "/projects/seek.html",
        iconUrl: "/images/icons/seek00.png",
        genre: "coding"
    },
    {
        name: "Ignorance of Idolatrous Knowledge",
        url: "/projects/ignorance-of-idolatrous-knowledge.html",
        iconUrl: "/images/icons/ignorance00.png",
        genre: "coding"
    },
    {
        name: "Blue Blooms",
        url: "/projects/blue-blooms.html",
        iconUrl: "/images/icons/blue00.jpg",
        genre: "fine-art"
    },
    {
        name: "Data in Art Dimension",
        url: "/projects/data-in-art-dimension.html",
        iconUrl: "/images/icons/data00.jpg",
        genre: "installation"
    },
    {
        name: "Beckett",
        url: "/projects/beckett.html",
        iconUrl: "/images/icons/beckett00.jpg",
        genre: "fine-art"
    },
    {
        name: "Corprio web app",
        url: "/projects/corprio-web-app.html",
        iconUrl: "/images/icons/corprioweb00.png",
        genre: "coding"
    },
    {
        name: "eis",
        url: "/projects/eis.html",
        iconUrl: "/images/icons/eis00.png",
        genre: "animation"
    },{
        name: "Switched Match",
        url: "/projects/switched-match.html",
        iconUrl: "/images/icons/switched00.png",
        genre: "coding"
    },
    {
        name: "Claw Machine",
        url: "/projects/claw-machine.html",
        iconUrl: "/images/icons/claw00.png",
        genre: "coding"
    },
    {
        name: "Corprio app icons",
        url: "/projects/corprio-app-icons.html",
        iconUrl: "/images/icons/corprioicons00.png",
        genre: "graphic-design"
    },
    
    {
        name: "A Dream Come True",
        url: "/projects/a-dream-come-true.html",
        iconUrl: "/images/icons/dream00.jpg",
        genre: "animation"
    },
    {
        name: "Individualist Chess",
        url: "/projects/individualist-chess.html",
        iconUrl: "/images/icons/individualist00.png",
        genre: "coding"
    },
    {
        name: "Mr. Mould the Moose",
        url: "/projects/mr-mould-the-moose.html",
        iconUrl: "/images/icons/moose00.jpg",
        genre: "fine-art"
    },
    {
        name: "Venice",
        url: "/projects/venice.html",
        iconUrl: "/images/icons/venice00.jpg",
        genre: "fine-art"
    },
    {
        name: "For Aunt Muriel",
        url: "/projects/for-aunt-muriel.html",
        iconUrl: "/images/icons/muriel00.jpg",
        genre: "fine-art"
    },
    {
        name: "Reflection",
        url: "/projects/reflection.html",
        iconUrl: "/images/icons/reflection00.jpg",
        genre: "fine-art"
    },
    {
        name: "Eve's Bite",
        url: "/projects/eves-bite.html",
        iconUrl: "/images/icons/eves00.png",
        genre: "animation"
    },
    {
        name: "Swift to Hear",
        url: "/projects/swift-to-hear.html",
        iconUrl: "/images/icons/swift00.png",
        genre: "graphic-design"
    },
    {
        name: "Book Illustrations",
        url: "/projects/book-illustrations.html",
        iconUrl: "/images/icons/book00.png",
        genre: "fine-art"
    },
    {
        name: "Wedding Invitation",
        url: "/projects/wedding-invitation.html",
        iconUrl: "/images/icons/wedding00.jpg",
        genre: "graphic-design"
    },
    {
        name: "Idea Campaign",
        url: "/projects/idea-campaign.html",
        iconUrl: "/images/icons/idea00.png",
        genre: "graphic-design"
    },
    {
        name: "Inclusion Ambassadors",
        url: "/projects/inclusion-ambassadors.html",
        iconUrl: "/images/icons/ia00.png",
        genre: "graphic-design"
    },
    {
        name: "IA Logo",
        url: "/projects/ia-logo.html",
        iconUrl: "/images/icons/logo00.png",
        genre: "graphic-design"
    },
    {
        name: "Clockbeat",
        url: "/projects/clockbeat.html",
        iconUrl: "/images/icons/clockbeat00.jpg",
        genre: "installation"
    },
    {
        name: "Hole in the Ground",
        url: "/projects/hole-in-the-ground.html",
        iconUrl: "/images/icons/hole00.jpg",
        genre: "animation"
    },
    {
        name: "Tong",
        url: "/projects/tong.html",
        iconUrl: "/images/icons/tong00.jpg",
        genre: "animation"
    },
    {
        name: "Cinderella",
        url: "/projects/cinderella.html",
        iconUrl: "/images/icons/cinderella00.jpg",
        genre: "coding"
    },
    {
        name: "Comb in ati on",
        url: "/projects/combination.html",
        iconUrl: "/images/icons/combination00.jpg",
        genre: "coding"
    },
    {
        name: "Countdown to Heaven",
        url: "/projects/countdown-to-heaven.html",
        iconUrl: "/images/icons/countdown00.jpg",
        genre: "installation"
    },
    {
        name: "Nostalgic Moon",
        url: "/projects/nostalgic-moon.html",
        iconUrl: "/images/icons/nostalgic00.jpg",
        genre: "animation"
    },
    {
        name: "Serialist Origami",
        url: "/projects/serialist-origami.html",
        iconUrl: "/images/icons/serialist00.jpg",
        genre: "installation"
    },
    {
        name: "Eeyores",
        url: "/projects/eeyores.html",
        iconUrl: "/images/icons/eeyores00.png",
        genre: "animation"
    },
    {
        name: "Shower Bed",
        url: "/projects/shower-bed.html",
        iconUrl: "/images/icons/shower00.jpg",
        genre: "animation"
    },
    {
        name: "Bouncy Cylinder",
        url: "/projects/bouncy-cylinder.html",
        iconUrl: "/images/icons/bouncy00.jpg",
        genre: "animation"
    },
    {
        name: "This website",
        url: "/projects/this-website.html",
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
if (currentPage == "/" || currentPage == "/index.html") {
    toBeUnderlined = "nav-all";
} else {
    let isGenrePage = false;
    genres.forEach(genre => {
        //is a genre page
        if (currentPage == "/" + genre + ".html") {
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

