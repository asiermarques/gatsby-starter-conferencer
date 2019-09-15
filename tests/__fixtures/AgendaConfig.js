import Speaker from "./Speaker"

export default {
    "visible": true,
    "time_slots": ["10:00-11:00", "11:00-12:00"],
    "tracks":[
        {
            "name": "Olympia Room",
            "content_in_slots": [
                {
                    "type": "speaker",
                    "content": Speaker.slug
                },
                {
                    "type": "text",
                    "content": "test"
                }
            ]
        },
        {
            "name": "Niza",
            "content_in_slots": [
                {
                    "type": "speaker",
                    "content": Speaker.slug
                },
                {
                    "type": "text",
                    "content": "test"
                }
            ]
        }
    ]
}