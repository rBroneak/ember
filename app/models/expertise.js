import DS from 'ember-data';

export default DS.Model.extend({
    data = {
        skills: [
            {
                leadin: 'leadin',
                title: 'technical and intelectual Skills' ,
                intro: "I have experience and a strong understanding of the following"
            },
            {
                qualities: [
                    {
                        list: [
                            'Maya',
                            '3d Modeling',
                            '508 Compliance',
                            'Adobe CC',
                            'AngularJS',
                            'Animation',
                            'Art Direction',
                            'Bootstrap',
                            'CSS 3',
                            'Conceptual Art',
                            'Craft CMS',
                            'Creative Direction',
                            'Fine Art',
                            'Graphic Design',
                            'HTML 5',
                            'Illustration',
                            'Interactive Media',
                            'JavaScript',
                            'jQuery',
                            'LESS',
                            'Motion Graphics',
                            'Oil Painting',
                            'SASS',
                            'Semantic UI',
                            'Twitter Bootstrap',
                            'User Interface Design',
                            'Web Design',
                            'Web Development',
                            'Webhook',
                            'WodPress',
                        ]
                    }


                ],
            },
        ],}
    })
