# Project Brief  
## Black Doctor RSVP Project

---

## 1. Project Summary

**In one sentence:**  
A personalised RSVP website for Black Doctor partners to confirm attendance at a February launch event.

---

## 2. Problem & Opportunity

**Problem**

- Event invitations often feel generic.
- Partners lack context or a sense of exclusivity.
- RSVP friction reduces response rates.

**Opportunity**

- Create a personal invitation experience.
- Set the tone for the Black Doctor launch.
- Increase RSVP completion through clarity and intent.

---

## 3. Goals

**Primary goals**

- Enable invited partners to RSVP quickly.
- Communicate event details clearly.
- Reinforce the importance of the invitation.

**Secondary goals**

- Create a memorable pre-event moment.
- Establish a premium, intentional feel.
- Support light personalisation at scale.

---

## 4. Non-Goals (Out of Scope)

- No public event listing.
- No ticketing or payments.
- No user accounts or login.
- No complex backend beyond form handling.

---

## 5. Audience

**Primary audience**

- Black Doctor brand partners and invited collaborators.

**Secondary audience**

- Internal stakeholders reviewing RSVP status.

---

## 6. Success Criteria

This project is successful if:

- Invited partners complete the RSVP form.
- Personalised invitations feel intentional.
- Stakeholders can confirm attendance ahead of the event.
- The experience works smoothly across devices.

---

## 7. Constraints & Requirements

**Timeline**

- Launch ahead of the event at the end of February.

**Platform**

- Webflow. Responsive web only.

**Technical requirements**

- Custom JavaScript for logic and behaviour.
- GSAP for motion and animation.
- Potential integrations for form handling and notifications.
- URL-based personalisation using hash values to update on-page names.

**Accessibility**

- Clear hierarchy.
- Readable contrast.
- Keyboard-friendly form interactions.

**Performance**

- Fast load times.
- No unnecessary libraries.

---

## 8. Design & Build Notes

**Design intent**

- Feels like a personal invitation, not a marketing page.
- Restrained, clear, and focused.
- Motion supports meaning, not decoration.

**Personalisation**

- URL hash updates the invitee name dynamically.
- Example:  
  `site.com/rsvp#Alex` → “You’re invited, Alex”

**Content**

- Event details surfaced clearly.
- RSVP form is the primary action.
- Follow-up communication handled by email closer to the event.

**Known risks**

- Late changes to event details.
- Edge cases with missing or malformed URL hashes.

---

## 9. Open Questions

- Final event date and time?
- Final location details?
- RSVP deadline?
- Confirmation message copy after submission?
