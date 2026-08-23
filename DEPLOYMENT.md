# Deployment baseline — Portfolio v5.0 Release Candidate

Repository: `aayoubMSA/ahmed-ayoub-portfolio`
GitHub Pages URL: `https://aayoubmsa.github.io/ahmed-ayoub-portfolio/`
Branch: `main`

GitHub Pages is deployed through GitHub Actions. The workflow builds the public-safe `cv.pdf` before uploading the Pages artifact.

## v5.0 scope
- Academic Home profile with approved professional portrait.
- Research areas plus three published research evidence pages.
- Selected publications presented as academic citations with DOI/evidence links where available.
- Teaching, student research and academic service.
- Compressed About page with education, appointments and research collaboration.
- Public-safe reproducible CV.
- Open Graph and Twitter metadata using the approved portrait.
- Accessibility contrast/focus improvements and skip navigation.

## Privacy / reputation gate
Do not publish confidential institutional findings, student records, private business or financial information, unpublished research status/details, or professional claims that have not been reconciled for public use.

## Release gate
Source/build QA: PASS.
Home visual composition: PASS based on the confirmed live screenshot.
Custom-domain/DNS cutover: HOLD until separately approved after final live verification of CV and internal evidence links.

The existing Google Site remains untouched as fallback.
