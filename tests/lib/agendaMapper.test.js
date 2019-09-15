import AgendaConfigFixture from "../__fixtures/AgendaConfig"
import SpeakerFixture from "../__fixtures/Speaker"
import agendaMapper from "../../src/lib/agendaMapper"
import agendaSlotType from "../../src/lib/agendaSlotTypes"

describe("AgendaMapper", () => {
  it("map the agenda fixture", () => {
    const [agendaLine1, agendaLine2] = agendaMapper(AgendaConfigFixture, [SpeakerFixture]);

    const speakerSlot = {
      "content": SpeakerFixture,
      "type": agendaSlotType.SPEAKER
    };
    expect(agendaLine1).toEqual([
      AgendaConfigFixture.time_slots[0],
      speakerSlot,
      speakerSlot
    ]);

    const textSlot = {
      "content": "test",
      "type": agendaSlotType.TEXT
    };
    expect(agendaLine2).toEqual([
      AgendaConfigFixture.time_slots[1],
      textSlot,
      textSlot
    ]);
  })
})