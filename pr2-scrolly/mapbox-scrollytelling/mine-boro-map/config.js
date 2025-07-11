var config = {
    style: 'mapbox://styles/nmuffet/cmcnjiavh00gg01s0g8vjbxmh',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoibm11ZmZldCIsImEiOiJja2ZlNjBlNGswMXM2MnlwaWdrZjJhbjV4In0.CvpFw7JeJJLUrM9EiLNPPQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Your Title Goes Here',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'By a I.M. Amapper',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco',
            image: './assets/san-fran.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.82,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'subways',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'NYC',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.82,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'not15',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'subways',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: "It's not true.",
            image: './assets/geneva.jpg',
            description: "A ton of people don't have subway access.",
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.82,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'not15',
                    opacity: .4,
                    duration: 1000
                },
                {
                    layer: 'subways',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [ ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-73.954, 40.632],
                zoom: 11.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                                {
                    layer: 'not15',
                    opacity: .4,
                    duration: 1000
                },
                {
                    layer: 'subways',
                    opacity: 1,
                    duration: 1000
                }],
            onChapterExit: []
        }
    ]
};
