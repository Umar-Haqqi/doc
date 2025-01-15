---
sidebar_label: 'Flows'
sidebar_position: 4
---

# Flows


## What is the Journey Flow?

A **Journey Flow** in Idenfo defines the structured and intuitive sequence of steps that users follow to complete their identity verification or authentication process. Each flow is meticulously designed to provide a seamless, secure, and user-friendly experience while ensuring compliance with global regulatory standards.

![My Image](../static/img/idv-sdk-flow-resize.png)

## SDK Configuration and Modular Workflow  
Idenfo Direct offers a fully customizable journey flow tailored to meet client and business requirements. The modular structure allows businesses to enable or disable specific SDK features based on operational needs, compliance demands, and user experience preferences. 

### Key Modules 
1. **Profile Creation**  
   - **Description:** Creates a user profile in Idenfo Direct to review the onboarded profiles.  
   - **Use Case:** Core functionality for starting the user journey.  
2. **OCR (Optical Character Recognition)**  
   - **Description:** Automatically extracts text from uploaded documents.  
   - **Use Case:** Eliminates manual data entry, ensuring accuracy and efficiency.  

3. **OCR Review Screen**  
   - **Description:** Allows users to verify and confirm the extracted text.  
   - **Use Case:** Provides a final check for data accuracy before submission.  

4. **Liveness Detection**  
   - **Description:** Enables real-time detection of user presence through subtle physical movements.  
   - **Use Case:** Prevents spoofing attempts using photos, videos, or masks.  

5. **Face Comparison**  
   - **Description:** Matches the user’s live selfie with their official ID photo for identity verification.  
   - **Use Case:** Ensures user authenticity and prevents identity fraud.  

6. **Name Screening**  
   - **Description:** Cross-references user names against global watchlists, PEP lists, and adverse media.  
   - **Use Case:** Facilitates compliance with anti-money laundering (AML) regulations.  

7. **Risk Rating**  
   - **Description:** Calculates user risk scores based on compliance and profile data.  
   - **Use Case:** Supports risk-based decision-making processes.  

8. **Document Validation**  
   - **Description:** Allows users to select and validate document types during onboarding.  
   - **Use Case:** Verifies the authenticity of identity documents.  

### Configuration and Flexibility  

Each module can be independently activated or deactivated via the **SDK Configuration Panel**. This flexibility empowers businesses to:  
- Design bespoke workflows for diverse onboarding scenarios.  
- Optimize processes for compliance-heavy industries.  
- Adapt quickly to changing business requirements.  

### Example Journey Flows  

- **Basic Onboarding:**  → Document Validation → OCR → Liveness Detection → OCR → Liveness Detection → Face Comparison → Profile Creation 
- **Enhanced Compliance:** Document Validation → OCR → Liveness Detection → OCR → Profile Creation → Name Screening → Risk Rating
- **Fraud Prevention:** Liveness Detection → Face Comparison 

### How to Configure  

1. Navigate to the **SDK Configuration Panel** under the admin dashboard.  
2. Use the toggle switch for each module to enable or disable it based on your requirements.  
3. Save changes and update the flow to apply the new configuration immediately.  

For detailed guidance, refer to the configurations document to get started [Getting Started](./getting-started/journey-flow.md).

