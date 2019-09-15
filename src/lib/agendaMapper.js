import SlotType from "./agendaSlotTypes";

export default function(agendaConfigData, speakersConfigData) {

    return agendaConfigData.time_slots.map((slot, index) => {

        const content = agendaConfigData.tracks.map(track => {
            const track_content = track.content_in_slots[index];
            const empty = {type: SlotType.TEXT, content: ""};

            if(!track_content || !track_content.type) return empty;

            return {
                type: track_content.type,
                content: track_content.type === SlotType.SPEAKER ?
                            speakersConfigData.find(speaker => speaker.slug === track_content.content)
                        :   track_content.content
            }

        });
        content.unshift(slot);

        return content;

    })

}