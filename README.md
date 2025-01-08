For the LOCI migration activities, we were instructed to use a non-user account to publish the libraries and application builds for deploying the CDN to Artifactory. 
Over the course of a couple of weeks, I worked with the Information Security team to create the non-user account and 
secure the necessary access for our domain repository and Artifactory. I coordinated with the teams to ensure the 
required permissions were granted and worked with the LOCI team to set up the non-user account in the LOCI pipeline.


I collaborate with Naresh to investigate the root cases whenever we receive alerts and promptly notify the downstream
team if we find any issues.

I participated in the U-pitch event, where I presented an idea to improve real-time bug reporting by integrating application logs 
with tools like FullStory. This approach would have provided developers with comprehensive bug details instantly, ensuring faster 
resolution and a better experience for the end users.

Implemented and delivered an utility function that enabled the phased rollout of the DIY LBA Credit app to stores, ensuring
the feature was release on schedule.

Implemented the Left Navigation Fabrik component on the security page, ensuring its alignment and appearance 
were consistent with other pages using the same component. A key challenge during this process was making the page 
responsive across all devices while adhering to the guidelines followed by the entire team.

As part of the Jenkins decommissioning, I successfully migrated all key domain applications to LOCI within the given timeline, 
completing the deployment ahead of schedule. Throughout the migration, 
I thoroughly reviewed the LOCI documentation, mastering its syntax and underlying concepts to ensure a smooth transition.

As part of the Information Security's team INTAKE, we were tasked with migrating all domain applications to Node 18 or higher and using the Docker base image provided by the security team, within a defined timeframe. The main challenge was ensuring compatibility of our older application libraries with Node 18, while also maintaining functionality. We replaced some libraries that were incompatible and upgraded others to comply with the latest syntax and conventions. After the upgrade, we identified an issue with the ESI functionality, which impacted the registration flow on the military and event pages. I promptly collaborated with the team lead to identify the root cause, resolved the issue, and deployed the changes as planned.


Developed the screens from scratch and migrated the DIY to PRO conversion flow from Backyard V1 to V3. This update provides users with more intuitive information about the offers and rewards available to them after the upgrade, while also streamlining the process to minimize the details users need to enter for account upgrades.
As part of this implementation, I refactored the legacy code to enhance scalability and readability.
The changes are now live in production for both the store flow and digital journey, and according to the product team, this feature is expected to significantly contribute to the success of the MLPR launch.

Developed the base layout, which is now being reused for both the DIY and PRO success screens.


Developed the MFA Flyout component based on the new UX, which is now reused on both the security page and the DIY success screen page. During this process, I refactored the entire code, removing redundant sections, and conducted extensive testing to ensure everything worked correctly post-refactoring. After reviewing the Figma UX, I suggested a few minor adjustments to the product team to enhance the user experience.
The changes are now live on the security page.


As part of MLPR, we were tasked with updating the 'New Enrollment Form' to modify the DIY and PRO registration and ACO/SCO flows.
For the PRO registration, the business email screen had to be removed and integrated directly into the PRO registration form. This change presented a challenge as, in addition to adding the email field to the form, we also needed to implement drill verification and to check whether the email was associated with DIY, PRO, a grandfathered user, or an already applied credit app. We had to ensure all these validations were handled within a single registration form, but the existing code was not scalable. After consulting with the team lead, we decided to build a new component from scratch and refactor the entire code to ensure scalability and accommodate the new requirements.

For the ACO/SCO flow, instead of redirecting the user to the PRO or DIY registration page, the new requirement was to first redirect the user to the login page. From there, the user would be directly directed to the appropriate registration page (PRO or DIY) with the email address prefilled.

As part of the MLPR requirements, we were tasked with adding an expandable and collapsible Industry option on the PRO registration page, as well as incorporating this behavior into the DIY to PRO conversion flow. To address this, I developed a reusable component that can be easily integrated wherever this functionality is needed.

Guided team members through the DIY to PRO conversion and Credit app flow, working closely with them to implement all the MLPR related text changes.

Familiarized myself with the cloud-native tech stack used for our domain applications, including Prometheus, Grafana, Istio, Kubernetes, and Elasticsearch, and now know how to use these tools effectively.
Deep-dived into Kubernetes, learning all its key concepts, and I plan to take the certification exam in the coming month.
Familiarized myself with a new React framework called Next.js, which leverages all the latest React features.
I’ve been studying clean code architecture through blogs and tutorials, and applying these principles to improve our codebase.
Learned React Native and published a utility expense tracker app on the Play Store.

I focus on solving problems with the end user in mind, ensuring that solutions are effective in the long term. I work closely with team members, sharing knowledge and valuing everyone’s contributions. I am always looking for ways to improve processes and take the initiative to learn new skills that benefit the team. I stay committed to delivering high-quality results and overcoming challenges, always keeping the team’s success as my priority.









