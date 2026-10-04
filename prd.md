# VIGYANSETU — Unified Scientific Archive & Outreach Platform

**Document:** Product Requirements Document (PRD)  
**Version:** 1.0  
**Status:** SIH Proposal / Prototype Blueprint  
**Product Type:** Institutional Scientific Knowledge, Archive, Data Discovery & Outreach Platform  
**Tagline:** **From Research Data to Public Knowledge**

---

## 1. Executive Summary

VIGYANSETU is a unified digital platform for scientific and research institutions to **ingest, preserve, organize, discover, connect, understand, and communicate scientific knowledge**.

The platform brings together fragmented institutional assets such as:

- expedition reports
- scientific datasets
- research publications
- technical reports
- photographs
- videos
- audio recordings
- maps and geospatial information
- researcher profiles
- projects
- facilities
- institutional events and activities
- educational and outreach material

The key distinction is that VIGYANSETU is **not merely a digital repository or CMS**.

It creates a structured institutional knowledge layer in which:

> **Researcher → Project → Expedition → Dataset → Publication → Report → Photograph → Video → Outreach Story**

can be connected and discovered as one knowledge network.

An AI-assisted processing layer extracts metadata, creates semantic indexes, summarizes documents, generates audience-specific outreach drafts, translates content, analyzes datasets, and powers a retrieval-augmented research assistant.

AI-generated scientific content is **never treated as authoritative by default**. The platform uses source-grounded generation, evidence retrieval, claim verification, approval workflows, and audit trails so that institutional experts remain responsible for published scientific information.

### Core product loop

```text
Scientific Assets
       |
       v
Secure Ingestion
       |
       v
Metadata + AI Processing
       |
       v
Structured Scientific Repository
       |
       +------> Knowledge Graph
       |
       +------> Search / Discovery
       |
       +------> Research Assistant
       |
       v
Evidence-Grounded Outreach Engine
       |
       v
Human Review + Approval
       |
       +------> Website
       +------> Student Content
       +------> Social Media
       +------> Newsletter
       +------> Press / Fact Sheet
       |
       v
Analytics
       |
       v
Improved Outreach
```

---

# 2. Problem Statement

## 2.1 Background

Scientific institutions continuously produce valuable knowledge, but the resulting information is frequently distributed across disconnected systems, folders, websites, databases, PDFs, personal computers, cloud storage and social-media channels.

The same research activity can generate:

- one expedition report
- several datasets
- dozens or thousands of photographs
- multiple videos
- scientific publications
- technical observations
- researcher contributions
- institutional news
- educational opportunities

Without a unified information architecture, these outputs become difficult to discover and reuse.

## 2.2 Existing Problems

### P1 — Fragmented scientific information

Research assets exist in disconnected repositories.

### P2 — Weak metadata

Files are often stored with insufficient structured metadata, making discovery difficult.

### P3 — Difficult scientific discovery

Researchers must know the exact title, filename, author or location to find relevant material.

### P4 — Research is difficult for non-specialists

Technical reports are valuable but often inaccessible to students, teachers, journalists and citizens.

### P5 — Manual outreach

Communication teams repeatedly transform the same research into:

- web articles
- social posts
- newsletters
- press releases
- educational explainers

### P6 — Weak relationships between assets

A publication may not visibly connect to:

- the dataset it used
- the expedition that generated it
- the researchers involved
- photographs documenting the fieldwork

### P7 — AI hallucination risk

Generic AI systems can produce scientifically plausible but unsupported statements.

### P8 — Preservation risk

Older scientific outputs may become difficult to locate, verify or maintain.

### P9 — Multilingual communication gap

Scientific material may be available primarily in English while public outreach needs Indian-language content.

### P10 — Lack of public-interest analytics

Institutions may not know:

- which scientific topics the public searches for
- which research is under-discovered
- which datasets are frequently downloaded
- which research needs better outreach

---

# 3. Product Vision

## Vision

Build a trusted institutional scientific knowledge layer that transforms fragmented research outputs into:

1. **Findable knowledge**
2. **Reusable scientific data**
3. **Connected research context**
4. **Evidence-grounded AI assistance**
5. **Accessible public communication**
6. **Multilingual educational content**
7. **Long-term digital preservation**

## Product Mission

> Preserve institutional scientific knowledge, make it discoverable and interconnected, and convert verified research into understandable public knowledge without compromising scientific integrity.

---

# 4. Product Principles

## PP-01 — Source First

Original institutional material remains the authoritative source.

## PP-02 — AI Assists, Humans Decide

AI may extract, summarize, recommend and draft. Authorized humans approve scientific publication.

## PP-03 — One Source, Many Outputs

A single verified research object should support many downstream experiences.

## PP-04 — Structured Over File-Centric

Files are stored as assets, but metadata and relationships are first-class objects.

## PP-05 — Discoverability by Design

Every resource should be searchable through metadata, full text, semantic similarity and relationships.

## PP-06 — Preservation Is a Product Feature

Archive integrity, versioning, checksums and lifecycle management are built into the platform.

## PP-07 — Public and Researcher Needs Are Different

The same underlying knowledge should support different audience experiences.

## PP-08 — Provider Agnostic

AI, storage and infrastructure components should be replaceable without rewriting the product.

## PP-09 — Deployment Flexibility

The platform should support institutional/private-cloud and controlled public-cloud deployment.

## PP-10 — Accessibility and Inclusion

Accessibility, multilingual communication and mobile usability are first-class requirements.

---

# 5. Goals

## G-01

Create a unified repository for institutional scientific outputs.

## G-02

Provide structured metadata and relationships for every research asset.

## G-03

Enable fast scientific discovery through hybrid search.

## G-04

Enable natural-language research discovery.

## G-05

Create an evidence-grounded institutional research assistant.

## G-06

Automate metadata extraction while retaining human review.

## G-07

Convert scientific research into approved outreach content.

## G-08

Support multilingual public communication.

## G-09

Provide interactive expedition and geospatial exploration.

## G-10

Improve scientific data quality and documentation.

## G-11

Provide preservation, versioning, audit and governance.

## G-12

Provide analytics for institutional outreach strategy.

---

# 6. Non-Goals

The following are explicitly outside the initial scope:

1. Replacing a laboratory information management system.
2. Replacing institutional ERP software.
3. Performing autonomous scientific peer review.
4. Automatically publishing AI-generated scientific claims without human approval.
5. Replacing scientists or archivists.
6. Building a universal global scientific repository.
7. Implementing blockchain solely for marketing purposes.
8. Providing unrestricted access to sensitive research.
9. Guaranteeing scientific conclusions from AI.
10. Building a complete social-media management suite in the MVP.

---

# 7. Target Users

## 7.1 Public Citizen

Needs:

- discover research
- understand discoveries
- browse photographs and videos
- read science stories
- explore expeditions

## 7.2 Student

Needs:

- simplified explanations
- educational content
- visualizations
- glossary
- videos
- quizzes or learning modules

## 7.3 Researcher

Needs:

- discover datasets
- find publications
- locate related expeditions
- upload research outputs
- maintain research profile
- download data
- cite resources

## 7.4 Archivist

Needs:

- ingest resources
- manage metadata
- classify records
- preserve files
- manage versions
- track archival status

## 7.5 Scientific Curator

Needs:

- validate metadata
- review scientific descriptions
- approve resource publication
- manage taxonomy

## 7.6 Communications Officer

Needs:

- create outreach material
- repurpose research
- generate social content
- manage campaigns
- schedule approved content

## 7.7 Institutional Administrator

Needs:

- manage users
- monitor repository
- configure workflows
- review analytics
- manage policies

## 7.8 External Researcher / Academic

Needs:

- search public datasets
- cite publications
- discover research relationships
- download approved data

---

# 8. User Roles and Permissions

| Role | Upload | Metadata | Scientific Review | Outreach | Publish | Admin |
|---|---:|---:|---:|---:|---:|---:|
| Public | No | No | No | No | No | No |
| Researcher | Yes | Own | No | Optional | No | No |
| Archivist | Yes | Yes | No | No | No | No |
| Scientific Curator | Yes | Yes | Yes | No | Yes | No |
| Communications Officer | No | Limited | No | Yes | No | No |
| Reviewer | No | Limited | Yes | Yes | Yes | No |
| Administrator | Yes | Yes | Yes | Yes | Yes | Yes |

---

# 9. Core Product Modules

VIGYANSETU consists of the following major modules:

1. Public Discovery Portal
2. Researcher Portal
3. Archive / Repository
4. Metadata Management
5. Document Ingestion
6. Dataset Management
7. Expedition Management
8. Media Management
9. Publication Management
10. Researcher Profiles
11. Project Management
12. Scientific Knowledge Graph
13. Hybrid Search
14. Natural Language Search
15. Research Assistant
16. AI Metadata Extraction
17. Outreach Content Studio
18. Claim Verification
19. Multilingual Content
20. Scientific Glossary
21. Approval Workflow
22. Access and Embargo Management
23. Digital Preservation
24. Analytics
25. Administration
26. API / Interoperability Layer
27. Security and Audit

---

# 10. Information Architecture

```text
VIGYANSETU
|
+-- Discover
|   +-- Research
|   +-- Publications
|   +-- Datasets
|   +-- Expeditions
|   +-- Projects
|   +-- Researchers
|   +-- Facilities
|   +-- Media
|
+-- Explore
|   +-- Map
|   +-- Timeline
|   +-- Topics
|   +-- Collections
|
+-- Learn
|   +-- Science Stories
|   +-- Student Zone
|   +-- Glossary
|   +-- Videos
|   +-- Infographics
|
+-- Outreach
|   +-- News
|   +-- Events
|   +-- Campaigns
|   +-- Newsletter
|
+-- Research Assistant
|
+-- Researcher Portal
|
+-- Admin Portal
```

---

# 11. Public Portal Requirements

## FR-PUB-001 — Homepage

The homepage shall provide:

- global search
- featured expedition
- featured discovery
- latest research
- featured datasets
- science stories
- upcoming institutional activities
- student content
- multimedia
- statistics

## FR-PUB-002 — Global Search

Users shall be able to search:

- titles
- descriptions
- authors
- keywords
- full document text
- datasets
- locations
- expeditions
- projects
- publications
- media

## FR-PUB-003 — Resource Pages

Each resource shall have a canonical page containing:

- title
- summary
- description
- metadata
- creator
- date
- related resources
- access status
- license
- download options
- citation
- provenance
- version
- source references

## FR-PUB-004 — Related Resources

Every resource page should show relevant:

- projects
- researchers
- datasets
- publications
- expeditions
- media
- stories

## FR-PUB-005 — Shareability

Public pages should support:

- Open Graph metadata
- social preview images
- canonical URLs
- structured metadata

---

# 12. Researcher Portal

Researchers shall be able to:

- create/update profiles
- upload publications
- upload datasets
- submit reports
- associate resources with projects
- associate resources with expeditions
- view metadata extraction suggestions
- submit resources for review
- view approval status
- manage versions
- view citations/download statistics

---

# 13. Unified Repository

## Resource Types

The repository shall support:

### Documents

- research papers
- technical reports
- expedition reports
- annual reports
- theses
- policy documents
- conference papers
- newsletters

### Data

- CSV
- XLSX
- JSON
- XML
- NetCDF
- GeoJSON
- GeoTIFF
- Shapefile packages
- other approved formats

### Media

- JPEG
- PNG
- TIFF
- MP4
- WebM
- WAV
- MP3

### Structured Objects

- researcher
- project
- expedition
- facility
- event
- collection

---

# 14. Metadata Framework

## Common Metadata

Each resource shall support:

- Resource ID
- Title
- Alternative title
- Description
- Abstract
- Resource type
- Creator
- Contributor
- Institution
- Department
- Project
- Research domain
- Keywords
- Language
- Creation date
- Publication date
- Location
- License
- Access level
- Version
- File format
- File size
- Checksum
- Related resources
- Citation
- Identifier
- DOI if available
- ORCID if available
- Review status
- Created timestamp
- Updated timestamp

## Dataset Metadata

Additional fields:

- spatial coverage
- temporal coverage
- variables
- units
- coordinate system
- instrument
- collection method
- sampling frequency
- processing level
- data dictionary
- quality status
- missing-value policy
- license
- usage restrictions

## Expedition Metadata

- expedition ID
- name
- objectives
- start date
- end date
- vessel/platform
- principal investigator
- participating scientists
- locations
- route
- stations
- samples
- datasets
- reports
- publications
- images
- videos
- findings
- related projects

---

# 15. Metadata Taxonomy

The platform shall maintain controlled vocabularies for:

- scientific domains
- subdomains
- resource types
- geographic regions
- institutions
- departments
- instruments
- data types
- access levels
- licenses
- languages
- audience types

Taxonomies must be versioned.

Administrators shall be able to add or modify taxonomy terms without database migration.

---

# 16. AI-Assisted Metadata Extraction

## Objective

Reduce manual cataloguing effort.

## Pipeline

```text
Upload
  |
  v
Security Scan
  |
  v
File Validation
  |
  v
Text / Media Extraction
  |
  v
AI Classification
  |
  v
Metadata Extraction
  |
  v
Confidence Scoring
  |
  v
Human Review
  |
  v
Publish
```

## Extracted fields

AI may suggest:

- title
- abstract
- authors
- date
- location
- scientific domain
- keywords
- entities
- project
- expedition
- instrument
- methods
- referenced datasets
- related publications

## Mandatory Rule

AI-generated metadata shall be marked as:

`AI_SUGGESTED`

until a human reviewer accepts it.

---

# 17. Document Processing

## Supported pipeline

```text
PDF
 |
 +--> Text PDF --> Text Extraction
 |
 +--> Scanned PDF --> OCR
 |
 v
Cleaning
 |
v
Structure Detection
 |
v
Section Detection
 |
v
Chunking
 |
v
Embeddings
 |
v
Search Index
```

The system should detect:

- headings
- tables
- figures
- references
- page numbers
- captions

Where possible, page numbers must be retained for citation.

---

# 18. OCR Requirements

The OCR service should support:

- printed documents
- scanned reports
- mixed layouts
- multilingual text where supported

OCR output shall retain:

- page number
- bounding information where available
- confidence
- extracted text

OCR text shall never overwrite the original file.

---

# 19. Scientific Dataset Module

## Dataset Upload

Researchers shall be able to upload datasets and associated documentation.

## Dataset Preview

For tabular data:

- first N rows
- column names
- data types
- missing-value statistics
- unique values
- numeric statistics

## Data Dictionary

The system shall generate a suggested data dictionary.

## Quality Checks

The system should check:

- missing values
- duplicate records
- invalid coordinates
- inconsistent data types
- impossible date formats
- suspicious outliers
- empty columns
- inconsistent units

Quality checks must be advisory unless explicitly configured otherwise.

---

# 20. Dataset Visualization

The system should support automatic visualization suggestions:

- time series
- scatter plots
- distributions
- bar charts
- heatmaps
- geographic maps

The user shall be able to override automatically selected charts.

---

# 21. Dataset Versioning

Every dataset revision shall have:

- version number
- uploader
- timestamp
- change description
- checksum
- parent version
- status

Example:

```text
v1.0
v1.1
v2.0
```

Previous versions shall remain discoverable according to institutional retention policy.

---

# 22. Expedition Digital Twin

The expedition module is a flagship product capability.

## Expedition Overview

```text
Expedition
|
+-- Objective
+-- Dates
+-- Team
+-- Vessel
+-- Route
+-- Stations
+-- Samples
+-- Datasets
+-- Publications
+-- Reports
+-- Photos
+-- Videos
+-- Findings
```

## Interactive Map

Users can:

- view route
- select stations
- inspect coordinates
- view station metadata
- open associated samples
- open photographs
- open datasets

## Timeline

Timeline shall display:

- departure
- stations
- observations
- sampling events
- major activities
- return

---

# 23. Knowledge Graph

The platform shall represent relationships between scientific objects.

Example:

```text
Researcher
   |
   +--> Project
          |
          +--> Expedition
                 |
                 +--> Dataset
                 |
                 +--> Report
                 |
                 +--> Media
                 |
                 +--> Publication
```

## Relationship Types

Examples:

- authored_by
- contributed_by
- part_of
- generated_by
- derived_from
- used_by
- related_to
- conducted_during
- located_at
- documents
- illustrates
- cites
- version_of
- translated_from

---

# 24. Search Architecture

The search system shall combine:

1. Keyword search
2. Full-text search
3. Metadata filtering
4. Semantic/vector search
5. Relationship-aware retrieval

## Example Query

> Find marine biodiversity datasets collected in the Bay of Bengal after 2022.

The system should resolve:

```text
Domain = Marine Biodiversity
Location = Bay of Bengal
Year > 2022
Resource Type = Dataset
```

---

# 25. Natural Language Search

The user shall be able to enter natural-language questions.

Examples:

- "Which expeditions studied coral ecosystems?"
- "Show datasets from the Bay of Bengal."
- "Which publications use this dataset?"
- "Find reports by Dr. X."
- "What research was conducted in 2024?"

The system should transform natural-language intent into structured retrieval operations.

---

# 26. Research Assistant

## Objective

Provide an institutional, source-grounded research assistant.

## Architecture

```text
User Question
      |
      v
Query Understanding
      |
      v
Hybrid Retrieval
  |           |
Keyword     Vector
Search      Search
  |           |
  +-----+-----+
        |
        v
Reranking
        |
        v
Evidence Chunks
        |
        v
LLM
        |
        v
Answer + Citations
```

## Mandatory Requirements

The assistant shall:

- prefer institutional sources
- cite retrieved documents
- identify page/section where available
- state when evidence is insufficient
- avoid presenting unsupported claims as facts

## No-Evidence Behavior

If insufficient evidence is found:

> "I could not find sufficient evidence in the available institutional collection to answer this reliably."

---

# 27. Retrieval-Augmented Generation

The RAG system shall support:

- document chunking
- embeddings
- vector retrieval
- keyword retrieval
- metadata filters
- reranking
- source citation
- context limits
- answer grounding

The model shall not be allowed to answer solely from its pretrained knowledge when institutional evidence is required.

---

# 28. Research-to-Outreach Engine

This is the flagship AI feature.

## Input

Any approved scientific resource.

## Output formats

- website article
- science story
- student explainer
- social post
- LinkedIn post
- short-form caption
- newsletter
- press/fact sheet
- FAQ
- video description
- infographic brief

## Pipeline

```text
Scientific Source
       |
       v
Research Understanding
       |
       v
Key Findings
       |
       v
Evidence Extraction
       |
       v
Audience Selection
       |
       v
Content Generation
       |
       v
Claim Verification
       |
       v
Human Review
       |
       v
Publish
```

---

# 29. Audience-Adaptive Content

## Researcher

Technical terminology retained.

## Student

Simplified language, glossary and examples.

## General Public

Story-based explanation.

## Journalist

Fact sheet, verified numbers and source links.

## Policymaker

Executive summary and key findings.

---

# 30. Claim Verification

Generated content shall be decomposed into factual claims.

Example:

```text
Claim 1: 32 stations were sampled.
Claim 2: Expedition lasted 23 days.
Claim 3: 18 species were documented.
```

Each claim shall be checked against source evidence.

Possible states:

- VERIFIED
- PARTIALLY_SUPPORTED
- NEEDS_REVIEW
- UNSUPPORTED

Publishing shall be blocked for configured high-risk unsupported claims.

---

# 31. Scientific Content Risk Detection

The platform should flag:

- unsupported numerical claims
- altered scientific terminology
- invented citations
- unsupported causal statements
- incorrect dates
- unsupported locations
- exaggerated conclusions
- ambiguous statements

---

# 32. Human Review

AI-generated content must pass through:

```text
AI Draft
  |
  v
Scientific Review
  |
  v
Communications Review
  |
  v
Final Approval
  |
  v
Publish
```

Organizations may configure a single-reviewer or multi-reviewer workflow.

---

# 33. Content Studio

The Content Studio shall provide:

- source selection
- audience selection
- platform selection
- language selection
- tone selection
- length selection
- generation
- source preview
- claim verification
- editing
- approval
- version history

Example:

```text
Source:
Bay of Bengal Expedition 2025

Audience:
Students

Language:
English

Format:
Science Story

[ Generate Draft ]
```

---

# 34. Multilingual Outreach

The system shall support configurable Indian languages.

Architecture:

```text
Approved Master Content
        |
        v
Translation
        |
        v
Scientific Terminology Preservation
        |
        v
Human Review
        |
        v
Published Language Version
```

The original approved content remains the master source.

Translations shall have independent version tracking.

---

# 35. Scientific Glossary

The platform shall maintain:

- scientific term
- definition
- simplified definition
- related terms
- translations
- examples
- linked resources

Example:

```text
Phytoplankton Bloom

Scientific definition:
...

Student explanation:
A rapid increase in microscopic plant-like organisms
floating in water.

Related:
Oceanography
Marine ecology
Chlorophyll
```

---

# 36. Photo Intelligence

AI may suggest:

- caption
- objects
- scientific subjects
- keywords
- location
- related expedition
- related project

Human confirmation is required for important metadata.

Original image must remain untouched.

---

# 37. Video Intelligence

Pipeline:

```text
Video
 |
v
Audio Extraction
 |
v
Speech-to-Text
 |
v
Timestamp Segmentation
 |
v
Chapter Detection
 |
v
Summary
 |
v
Caption Generation
```

Output:

- transcript
- chapters
- summary
- captions
- description
- short-video candidate timestamps

---

# 38. Institutional Activities

The platform shall support:

- events
- workshops
- seminars
- conferences
- public lectures
- exhibitions
- awards
- announcements
- institutional milestones

Each activity may be linked to:

- researchers
- projects
- publications
- media
- outreach stories

---

# 39. Researcher Profiles

Profile fields:

- name
- designation
- department
- research interests
- biography
- ORCID
- publications
- datasets
- projects
- expeditions
- media
- awards

Public profiles shall expose only approved information.

---

# 40. Project Pages

Each project page shall contain:

- objective
- duration
- principal investigator
- team
- research domain
- outputs
- datasets
- publications
- expeditions
- media
- stories

---

# 41. Access Control

Resource access levels:

```text
PUBLIC
RESTRICTED
INTERNAL
EMBARGOED
CONFIDENTIAL
```

Permissions shall be applied independently to:

- metadata
- file
- preview
- download
- API access

This allows public metadata while restricting raw data.

---

# 42. Embargo Management

Resources may have:

- embargo start
- embargo end
- reason
- owner
- automatic release policy

Before embargo:

- metadata may be public
- file may be restricted

After embargo:

- access may automatically change according to policy

All automated access changes must be logged.

---

# 43. Digital Preservation

## File Integrity

Use SHA-256 checksums.

```text
Upload
 |
v
Hash
 |
v
Store Hash
 |
v
Periodic Integrity Check
```

## Preservation Metadata

Store:

- original filename
- MIME type
- checksum
- creation time
- uploader
- version
- storage location
- retention policy

---

# 44. Archive Lifecycle

```text
DRAFT
  |
SUBMITTED
  |
REVIEW
  |
PUBLISHED
  |
ARCHIVED
  |
PRESERVED
```

Archived resources should remain discoverable according to policy.

---

# 45. Analytics

## Repository Metrics

- total resources
- datasets
- publications
- reports
- media
- researchers
- expeditions

## Usage Metrics

- searches
- page views
- downloads
- dataset downloads
- video views
- science-story views

## Outreach Metrics

- generated drafts
- approved content
- published stories
- language distribution
- engagement

---

# 46. Knowledge Gap Detection

The platform should identify:

- highly searched but poorly documented topics
- heavily researched but poorly communicated topics
- datasets with low discoverability
- resources without complete metadata
- popular research without educational content

Example:

```text
Topic: Deep Sea Biodiversity

Research Assets: HIGH
Public Content: LOW
Search Demand: HIGH

Recommendation:
Create public explainer + student module.
```

Recommendations must be presented as analytics-based suggestions, not autonomous institutional decisions.

---

# 47. FAIR Readiness Indicator

The platform may provide an internal readiness indicator based on configured checks:

### Findable

- title
- metadata
- identifiers
- indexing

### Accessible

- access status
- download/API availability
- documentation

### Interoperable

- standard metadata
- machine-readable formats
- APIs

### Reusable

- license
- provenance
- data dictionary
- quality documentation

This is an internal readiness indicator, not formal certification.

---

# 48. Data Quality Dashboard

For datasets:

```text
Metadata completeness: 94%
Schema validity: 98%
Documentation: 88%
License: Present
Coordinate validation: Passed
Missing values: 3.2%
```

The score must show its underlying checks.

---

# 49. API Layer

## Public APIs

```http
GET /api/v1/resources
GET /api/v1/resources/{id}
GET /api/v1/search
GET /api/v1/publications
GET /api/v1/datasets
GET /api/v1/expeditions
GET /api/v1/projects
GET /api/v1/researchers
GET /api/v1/media
```

## Researcher APIs

```http
POST /api/v1/submissions
PATCH /api/v1/resources/{id}
POST /api/v1/datasets
POST /api/v1/publications
```

## AI APIs

```http
POST /api/v1/ai/metadata
POST /api/v1/ai/summarize
POST /api/v1/ai/content
POST /api/v1/ai/translate
POST /api/v1/ai/verify
POST /api/v1/ai/query
```

## Admin APIs

```http
GET /api/v1/admin/reviews
GET /api/v1/admin/audit
GET /api/v1/admin/analytics
```

All APIs must be authenticated according to access requirements.

---

# 50. Interoperability

The system should support:

- Dublin Core metadata
- OAI-PMH
- JSON-LD
- Schema.org
- REST APIs
- ORCID identifiers
- DOI identifiers where applicable
- standard geographic formats
- standard dataset formats

The architecture must allow additional metadata exchange protocols to be added later.

---

# 51. SEO and Discoverability

Public resources should provide:

- canonical URL
- page title
- description
- Open Graph metadata
- JSON-LD
- Schema.org structured data
- sitemap
- robots policy
- semantic HTML

Scientific resources should have stable URLs.

---

# 52. Accessibility

Target:

**WCAG 2.2 AA**

Requirements:

- keyboard navigation
- semantic HTML
- accessible forms
- focus states
- screen-reader compatibility
- alt text
- captions
- transcripts
- readable contrast
- scalable text
- accessible charts
- accessible map alternatives

Important information presented visually must have an equivalent textual representation.

---

# 53. Security Architecture

## Authentication

Preferred:

- OAuth2/OIDC
- institutional SSO where available
- MFA for privileged roles

## Authorization

RBAC + resource-level access control.

## File Security

Uploaded files should pass:

1. MIME validation
2. extension validation
3. malware scanning
4. size limits
5. checksum generation

## Application Security

- HTTPS
- secure cookies
- CSRF protection where applicable
- input validation
- output encoding
- rate limiting
- secret management
- dependency scanning

---

# 54. Audit Logging

Audit events shall include:

- user
- timestamp
- action
- resource
- previous value
- new value
- IP/device metadata where policy permits
- result

Examples:

```text
UPLOAD_RESOURCE
EDIT_METADATA
APPROVE_RESOURCE
REJECT_RESOURCE
PUBLISH_CONTENT
DOWNLOAD_DATASET
CHANGE_ACCESS
CREATE_USER
```

Audit logs should be append-oriented and protected from ordinary users.

---

# 55. Privacy

The platform shall follow data minimization.

Do not expose:

- private researcher information
- internal credentials
- restricted datasets
- sensitive coordinates
- personal information

unless explicitly authorized.

Sensitive geospatial information may require generalized or redacted public coordinates.

---

# 56. System Architecture

```text
                        USERS
                          |
        +-----------------+------------------+
        |                 |                  |
   Public Portal    Researcher Portal   Admin Portal
        |                 |                  |
        +-----------------+------------------+
                          |
                    API / Gateway
                          |
          +---------------+----------------+
          |                                |
   Application Services                AI Layer
          |                                |
   +------+------+------+         +-------+-------+
   |      |      |      |         |       |       |
Archive Search Outreach Data     OCR     LLM    STT
   |      |      |      |         |       |       |
   +------+------+------+         +-------+-------+
          |
     PostgreSQL
     + PostGIS
     + pgvector
          |
    +-----+------+
    |            |
OpenSearch   Object Storage
             |
       PDFs / Data / Media
```

---

# 57. Recommended Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend

- Python
- FastAPI
- Pydantic
- SQLAlchemy

## Database

- PostgreSQL
- PostGIS
- pgvector

## Search

- OpenSearch

## Object Storage

- MinIO for prototype/private deployment
- S3-compatible storage for scalable deployment

## Queue

- Redis
- Celery

## AI

- provider-agnostic LLM gateway
- multilingual embedding model
- BGE-M3 or equivalent
- PaddleOCR
- Whisper

## Maps

- MapLibre GL JS
- OpenStreetMap data where appropriate

## Visualization

- Apache ECharts

## Authentication

- Keycloak / OIDC

## Deployment

- Docker
- Docker Compose for prototype
- Kubernetes for larger production deployments if required

## CI/CD

- GitHub Actions or institutional equivalent

## Monitoring

- Prometheus
- Grafana
- Loki/OpenSearch logging

---

# 58. Technology Rationale

## Why Next.js?

- SEO
- server rendering
- modern React
- component ecosystem
- good public-portal performance

## Why FastAPI?

- Python AI ecosystem
- async APIs
- OpenAPI generation
- data-processing support

## Why PostgreSQL?

- mature relational database
- transactions
- metadata relationships
- extensibility

## Why PostGIS?

- scientific/geospatial research
- expedition routes
- sampling stations
- geographic search

## Why pgvector?

- semantic retrieval without requiring a separate vector database for the initial deployment

## Why OpenSearch?

- full-text search
- faceted filtering
- scalable indexing

## Why MinIO?

- S3-compatible
- self-hostable
- appropriate for institutional/private infrastructure

---

# 59. Event-Driven Processing

Long-running operations must not block normal API requests.

Example:

```text
Upload PDF
   |
API stores file
   |
Queue Job
   |
+---------------------------+
| Document Processing Worker|
+---------------------------+
   |
   +-- OCR
   +-- Text extraction
   +-- Metadata
   +-- Embeddings
   +-- Search indexing
```

Similarly:

```text
Upload Video
   |
Queue
   |
Media Worker
   |
Transcript
   |
Chapters
   |
Summary
```

---

# 60. AI Gateway

All AI providers should be accessed through an internal abstraction.

```text
AI Gateway
|
+-- Chat Completion
+-- Embedding
+-- Translation
+-- Speech
+-- OCR
```

This allows switching between:

- commercial APIs
- approved cloud services
- institutional APIs
- open-source models
- private inference

without changing business logic.

---

# 61. Database Model

Core entities:

```text
User
Role
Institution
Department
Researcher
Project
Expedition
ExpeditionStation
Resource
Document
Publication
Dataset
Media
Location
Keyword
Topic
License
Collection
ResourceRelationship
Submission
Review
ContentDraft
ContentVersion
Claim
Evidence
Embargo
AuditLog
Notification
```

---

# 62. Resource Model

All scientific assets should inherit from a common resource concept.

```text
Resource
|
+-- Document
+-- Publication
+-- Dataset
+-- Image
+-- Video
+-- Audio
+-- Expedition
+-- Project
+-- Event
```

Common properties:

- ID
- title
- description
- creator
- date
- status
- access
- license
- version
- provenance

---

# 63. Relationship Model

A generic relationship table should support:

```text
source_resource_id
target_resource_id
relationship_type
created_by
created_at
```

Examples:

```text
Dataset -> generated_by -> Expedition
Publication -> uses -> Dataset
Photo -> documents -> Expedition
Researcher -> authored -> Publication
Report -> documents -> Project
```

---

# 64. Content Model

Content entities:

```text
ContentDraft
|
+-- source_resources
+-- audience
+-- language
+-- platform
+-- tone
+-- generated_text
+-- claims
+-- verification_status
+-- reviewer
+-- approval_status
+-- published_version
```

---

# 65. Claim Model

Each claim should contain:

```text
claim_id
content_id
claim_text
source_resource
source_location
support_status
confidence
review_status
reviewer
```

---

# 66. Page Requirements

## Homepage

Must include:

- search
- featured research
- featured expedition
- science stories
- latest datasets
- media
- events
- student zone

## Search Page

Must include:

- query
- filters
- sorting
- resource-type tabs
- map option
- result count

## Resource Page

Must include:

- metadata
- abstract
- preview
- download
- related resources
- citation
- provenance

## Expedition Page

Must include:

- hero
- objective
- map
- timeline
- team
- stations
- datasets
- publications
- media
- findings

## Dataset Page

Must include:

- description
- metadata
- preview
- data dictionary
- visualizations
- quality checks
- version history
- download/API

## Researcher Page

Must include:

- biography
- expertise
- publications
- datasets
- projects
- expeditions

## Content Studio

Must include:

- source
- audience
- language
- format
- generated draft
- evidence
- claim status
- review controls

---

# 67. Admin Dashboard

Dashboard widgets:

- pending submissions
- pending scientific reviews
- pending outreach approvals
- resources added
- dataset quality warnings
- AI processing jobs
- failed processing jobs
- storage usage
- popular searches
- downloads
- outreach performance

---

# 68. Notifications

The system should notify users for:

- submission received
- metadata ready
- review requested
- review completed
- rejection
- approval
- embargo release
- dataset version update
- content approval
- processing failure

Channels:

- in-app
- email
- optional institutional notification integration

---

# 69. Performance Requirements

## Page Load

Public pages should target:

- LCP <= 2.5s for optimized pages under normal network conditions
- minimal blocking JavaScript

## Search

Target:

- p95 search response <= 2 seconds for indexed content

## Metadata API

Target:

- p95 <= 500 ms for normal metadata reads

## Upload

Large files must use resumable/multipart upload where supported.

## AI Jobs

AI processing is asynchronous and must provide job status.

---

# 70. Scalability Requirements

The architecture should support scaling:

```text
Frontend replicas
Backend replicas
Worker replicas
Search nodes
Object storage capacity
Database read replicas
```

The MVP may run on a single deployment, but services should remain logically separable.

---

# 71. Reliability

Target:

- graceful failure
- retry for transient AI/search failures
- dead-letter queue for failed jobs
- no data loss during normal application failures
- periodic backups
- integrity verification

---

# 72. Backup and Disaster Recovery

Back up:

- PostgreSQL
- object metadata
- configuration
- critical audit data

Object storage should use redundancy according to deployment environment.

Define:

- RPO target
- RTO target
- backup frequency
- retention
- restore testing procedure

For the SIH prototype, demonstrate backup/restore capability rather than claiming production disaster-recovery certification.

---

# 73. Observability

Monitor:

- API latency
- error rates
- queue depth
- worker failures
- AI token/cost usage where applicable
- search latency
- storage usage
- database health
- failed ingestion
- OCR failures

---

# 74. CI/CD

Pipeline:

```text
Git Push
 |
v
Lint
 |
v
Unit Tests
 |
v
Integration Tests
 |
v
Security Scan
 |
v
Docker Build
 |
v
Deploy Staging
 |
v
Smoke Tests
 |
v
Production Approval
 |
v
Deploy
```

---

# 75. Testing Strategy

## Unit Testing

Test:

- services
- validation
- permissions
- metadata rules
- parsers

## Integration Testing

Test:

- API + database
- storage + API
- search indexing
- queue + workers
- AI pipeline

## End-to-End

Test:

```text
Upload
 -> Process
 -> Review
 -> Publish
 -> Search
 -> Open
 -> Generate content
 -> Verify
 -> Approve
 -> Publish
```

## Security Testing

Test:

- unauthorized access
- privilege escalation
- malicious uploads
- injection
- broken access control
- rate limiting

---

# 76. Acceptance Criteria

## Repository

**AC-R-001**

Given a valid approved user, when a supported file is uploaded, the platform stores the file and creates a resource record.

**AC-R-002**

Every published resource has required metadata.

**AC-R-003**

A resource can be connected to related scientific resources.

## AI Metadata

**AC-AI-001**

AI extraction produces suggestions without directly publishing them.

**AC-AI-002**

A reviewer can accept, modify or reject every suggested field.

## Search

**AC-S-001**

A user can search by title, author, keyword and full text.

**AC-S-002**

A user can filter results by resource type, date and domain.

**AC-S-003**

Natural-language queries retrieve relevant institutional resources.

## RAG

**AC-RAG-001**

Answers cite supporting institutional sources.

**AC-RAG-002**

The assistant states when evidence is insufficient.

## Outreach

**AC-O-001**

A reviewer can generate an outreach draft from an approved source.

**AC-O-002**

The system identifies factual claims in generated content.

**AC-O-003**

Unsupported high-risk claims cannot be published without review.

## Dataset

**AC-D-001**

A supported tabular dataset can be previewed.

**AC-D-002**

A data dictionary can be generated.

**AC-D-003**

Dataset versions are retained.

## Expedition

**AC-E-001**

An expedition displays route, stations and related resources.

---

# 77. SIH MVP Scope

The SIH prototype should focus on a polished end-to-end workflow.

## Must Have

1. Public portal
2. Admin portal
3. Authentication
4. Resource upload
5. Metadata management
6. AI metadata extraction
7. Expedition pages
8. Interactive map
9. Dataset preview
10. Hybrid search
11. RAG assistant
12. Content Studio
13. Claim verification
14. Human approval
15. Researcher profiles
16. Analytics dashboard

## Should Have

- multilingual content
- video transcription
- scientific glossary
- FAIR readiness indicator
- knowledge graph visualization

## Could Have

- social publishing integrations
- advanced recommendation engine
- automated short-video generation
- advanced geospatial analytics

## Won't Have in Initial SIH Prototype

- full Kubernetes production infrastructure
- complex institutional SSO integrations
- autonomous publishing
- blockchain
- fully automated scientific peer review

---

# 78. SIH Demo Dataset

The demo should contain realistic interconnected records.

Example:

```text
3 Expeditions
10 Researchers
5 Projects
20 Publications
10 Datasets
100+ Images
10 Videos
5 Reports
```

Example flagship expedition:

```text
Bay of Bengal Marine Expedition 2025
```

Relationships:

```text
Expedition
 |
+-- 10 Researchers
+-- 5 Stations
+-- 3 Datasets
+-- 2 Reports
+-- 4 Publications
+-- 40 Photos
+-- 3 Videos
```

---

# 79. SIH Killer Demo Flow

## Step 1 — Upload

Upload an expedition report.

## Step 2 — AI Processing

Show automatically extracted:

- title
- authors
- location
- dates
- domain
- keywords
- abstract

## Step 3 — Human Review

Reviewer accepts metadata.

## Step 4 — Dataset

Upload CSV.

System displays:

- columns
- statistics
- data dictionary
- map

## Step 5 — Connect

Associate dataset with expedition.

## Step 6 — Explore

Open expedition digital twin.

Show:

- route
- stations
- researchers
- datasets
- publications
- media

## Step 7 — Ask AI

Ask:

> "What were the main activities of this expedition?"

Show cited answer.

## Step 8 — Generate Outreach

Click:

> Generate Student Science Story

## Step 9 — Verify

Show claim dashboard:

```text
Claims: 12
Verified: 11
Needs Review: 1
```

## Step 10 — Approve

Reviewer approves.

## Step 11 — Public Portal

The new story appears on the public site.

This demonstrates the complete research-to-outreach lifecycle.

---

# 80. Differentiators

## D-01 — Research-to-Outreach Pipeline

The system converts verified research into multiple public communication formats.

## D-02 — Scientific Knowledge Graph

Resources are connected rather than stored as isolated files.

## D-03 — Expedition Digital Twin

Research expeditions become interactive geographic and temporal experiences.

## D-04 — Evidence-Grounded AI

AI outputs are linked to institutional source evidence.

## D-05 — Human-in-the-Loop Governance

Scientific experts retain control over published information.

## D-06 — Audience-Adaptive Science

Same research can be presented differently to researchers, students, journalists and citizens.

## D-07 — Multilingual Scientific Outreach

Scientific communication can be localized to Indian languages.

## D-08 — Data Quality + FAIR Readiness

The platform improves metadata and reuse readiness.

## D-09 — Knowledge Gap Detection

The system identifies research areas that are poorly communicated to the public.

## D-10 — Preservation by Design

Checksums, versions, provenance and lifecycle management are built into the archive.

---

# 81. Product KPIs

## Repository

- number of resources digitized
- metadata completeness
- resources linked to relationships
- percentage of resources indexed

## Search

- search success rate
- zero-result rate
- average search latency
- resource discovery rate

## Data

- datasets published
- dataset downloads
- metadata completeness
- quality warnings resolved

## AI

- metadata extraction acceptance rate
- RAG citation coverage
- unsupported claim rate
- average review time

## Outreach

- content generated
- content approved
- content published
- page views
- engagement
- language distribution

## Institutional

- time saved in cataloguing
- time saved in content production
- research discoverability
- public engagement

---

# 82. Risk Register

| Risk | Impact | Mitigation |
|---|---|---|
| AI hallucination | High | RAG + claim verification + human review |
| Sensitive data exposure | High | RBAC + classification + embargo |
| Poor metadata | High | controlled vocabulary + AI suggestions + review |
| Large files | Medium | object storage + multipart upload |
| OCR errors | Medium | confidence + human review |
| Translation errors | Medium | terminology layer + review |
| Search quality | Medium | hybrid retrieval + evaluation dataset |
| Vendor dependency | Medium | AI abstraction layer |
| Data loss | High | backups + checksums + redundancy |
| Unauthorized upload | High | authentication + validation + malware scanning |
| AI cost | Medium | asynchronous jobs + model routing + caching |
| Poor adoption | Medium | simple workflows + training + analytics |

---

# 83. AI Governance Principles

1. AI-generated information is not automatically authoritative.
2. Source documents remain authoritative.
3. AI-generated scientific claims require evidence.
4. Human approval is required for public publication.
5. AI processing must be auditable.
6. Model/provider changes should be trackable.
7. Sensitive data should not be sent to external AI services without authorization.
8. Prompts and model configuration should be versioned for reproducibility where appropriate.

---

# 84. Deployment Architecture

## Prototype

```text
Docker Compose
|
+-- Next.js
+-- FastAPI
+-- Worker
+-- PostgreSQL
+-- Redis
+-- OpenSearch
+-- MinIO
```

## Production

Possible architecture:

```text
Load Balancer
      |
Frontend replicas
      |
API replicas
      |
+-----+------+--------+
|            |        |
Workers    Search   Database
             |
         Object Storage
```

Institution-specific infrastructure may replace individual services.

---

# 85. Environment Strategy

## Development

Local Docker environment.

## Staging

Production-like environment using anonymized/demo data.

## Production

Institution-controlled deployment.

Configuration must be environment-specific.

Secrets must never be committed to source control.

---

# 86. Suggested Repository Structure

```text
vigyansetu/
|
+-- frontend/
|   +-- app/
|   +-- components/
|   +-- features/
|   +-- lib/
|
+-- backend/
|   +-- api/
|   +-- models/
|   +-- schemas/
|   +-- services/
|   +-- repositories/
|
+-- workers/
|   +-- document/
|   +-- dataset/
|   +-- media/
|   +-- ai/
|
+-- ai/
|   +-- extraction/
|   +-- embeddings/
|   +-- rag/
|   +-- generation/
|   +-- verification/
|
+-- infrastructure/
|   +-- docker/
|   +-- nginx/
|   +-- monitoring/
|
+-- docs/
|   +-- architecture.md
|   +-- api.md
|   +-- metadata.md
|   +-- security.md
|
+-- tests/
|
+-- docker-compose.yml
+-- README.md
```

---

# 87. Implementation Roadmap

## Phase 0 — Product Design

Deliverables:

- UX wireframes
- information architecture
- metadata model
- architecture
- API specification

## Phase 1 — Repository Foundation

Deliverables:

- authentication
- resource model
- upload
- object storage
- metadata
- admin dashboard

## Phase 2 — Search and Discovery

Deliverables:

- OpenSearch
- filtering
- full-text indexing
- resource pages
- related resources

## Phase 3 — AI Ingestion

Deliverables:

- OCR
- extraction
- embeddings
- AI metadata
- asynchronous processing

## Phase 4 — Expedition and Data

Deliverables:

- expedition model
- maps
- dataset preview
- quality checks
- versioning

## Phase 5 — RAG

Deliverables:

- hybrid retrieval
- reranking
- citations
- research assistant

## Phase 6 — Outreach

Deliverables:

- Content Studio
- audience adaptation
- multilingual generation
- claim verification
- approval workflow

## Phase 7 — Hardening

Deliverables:

- security
- accessibility
- testing
- observability
- backup
- performance

---

# 88. Suggested 8-Week SIH Build Plan

## Week 1

- requirements freeze
- architecture
- UI design
- database schema
- repository setup

## Week 2

- authentication
- resource management
- file upload
- object storage
- metadata

## Week 3

- search
- filtering
- public resource pages
- researcher profiles
- project pages

## Week 4

- AI ingestion
- OCR
- metadata extraction
- embeddings
- RAG foundation

## Week 5

- expedition module
- maps
- dataset preview
- data quality

## Week 6

- Content Studio
- generation
- claim verification
- approval workflow

## Week 7

- multilingual support
- analytics
- accessibility
- security

## Week 8

- integration testing
- performance
- deployment
- demo dataset
- PPT
- judge Q&A
- final demo rehearsal

---

# 89. Definition of Done

A feature is complete when:

1. Functional requirements are implemented.
2. API behavior is documented.
3. Unit tests exist.
4. Integration tests exist where applicable.
5. Access control is implemented.
6. Error states are handled.
7. Audit behavior is implemented where required.
8. Accessibility requirements are addressed.
9. UI is responsive.
10. Documentation is updated.

---

# 90. Example End-to-End Data Flow

```text
Researcher
   |
   | Upload expedition report
   v
Upload API
   |
   v
Object Storage
   |
   v
Processing Queue
   |
   +--> OCR
   |
   +--> Text Extraction
   |
   +--> Metadata AI
   |
   +--> Embeddings
   |
   +--> Search Index
   |
   v
Review Queue
   |
   v
Scientific Curator
   |
   v
Approved Resource
   |
   +--> Knowledge Graph
   |
   +--> Search
   |
   +--> Research Assistant
   |
   +--> Outreach Engine
                |
                v
        Generated Content
                |
                v
          Claim Verification
                |
                v
          Communications Review
                |
                v
             Publish
```

---

# 91. Example Research Story

Source:

`Bay of Bengal Expedition Report 2025`

Generated public story structure:

```text
Title

Why did scientists conduct the expedition?

Where did they go?

What did they study?

What instruments did they use?

What did they observe?

What datasets were created?

Why does the research matter?

What happens next?

Explore the original research
```

Every scientific numerical or factual statement should be traceable to source evidence.

---

# 92. Example Student Content

```text
TOPIC:
How Scientists Study the Ocean

WHAT WAS THE QUESTION?

Scientists wanted to understand...

HOW DID THEY STUDY IT?

Researchers collected samples...

WHAT DID THEY FIND?

...

WHY DOES IT MATTER?

...

KEY TERMS

Oceanography
Plankton
Salinity
Biodiversity

EXPLORE THE ORIGINAL RESEARCH
```

---

# 93. Example Researcher Experience

```text
Dashboard

My Submissions
----------------
Drafts             2
Under Review       3
Published          18
Rejected           1

Recent Resources
----------------
Dataset v1.1
Expedition Report
Publication

Actions
----------------
[Upload Research]
[Create Dataset]
[View Profile]
```

---

# 94. Example Admin Experience

```text
ADMIN DASHBOARD

Resources                 12,482
Pending Review                42
Datasets                    1,240
Expeditions                   186

AI Processing
----------------
Completed                  98.2%
Failed                       1.8%

Outreach
----------------
Drafts                       84
Approved                     51
Published                    47

Popular Searches
----------------
Ocean
Climate
Biodiversity
```

---

# 95. Success Scenario

The product succeeds if an institution can:

1. upload a scientific resource,
2. automatically extract useful metadata,
3. have an expert review it,
4. connect it to projects, researchers and expeditions,
5. make it searchable,
6. preview its scientific data,
7. ask grounded questions about it,
8. generate outreach content,
9. verify generated claims,
10. approve the content,
11. publish it,
12. measure public engagement,
13. preserve the underlying research.

---

# 96. Strategic Positioning for SIH

The solution should be positioned as:

> **Scientific knowledge infrastructure + intelligent archive + public outreach engine**

rather than:

> AI chatbot + document website.

The platform has four layers:

```text
LAYER 1
DIGITAL PRESERVATION
|
LAYER 2
SCIENTIFIC KNOWLEDGE
|
LAYER 3
INTELLIGENT DISCOVERY
|
LAYER 4
PUBLIC OUTREACH
```

---

# 97. Core Innovation Statement

> **VIGYANSETU converts static institutional archives into a living scientific knowledge network. It connects reports, datasets, publications, researchers, expeditions and media, uses AI to make that knowledge discoverable and understandable, verifies AI-generated claims against institutional evidence, and enables approved scientific findings to be transformed into multilingual public outreach content.**

---

# 98. Final Product Architecture Summary

```text
                    VIGYANSETU
                         |
        +----------------+----------------+
        |                |                |
    PRESERVE          DISCOVER         COMMUNICATE
        |                |                |
   Repository         Search            Content Studio
   Metadata           RAG              Social Drafts
   Versioning         Knowledge        Student Mode
   Checksums          Graph            Multilingual
   Archival           Map              Newsletter
        |                |                |
        +----------------+----------------+
                         |
                  HUMAN GOVERNANCE
                         |
               Scientific Review
                         |
                 Content Approval
                         |
                      PUBLIC
```

---

# 99. Final Differentiator Summary

VIGYANSETU should be remembered through five capabilities:

### 1. Archive

Preserve the institution's scientific memory.

### 2. Connect

Create relationships between research assets.

### 3. Understand

Use AI to extract, search and explain institutional knowledge.

### 4. Verify

Ground AI outputs in evidence and keep humans in control.

### 5. Communicate

Transform verified research into accessible, multilingual public knowledge.

---

# 100. Final SIH Pitch

> **Scientific institutions produce enormous amounts of knowledge, but that knowledge often remains fragmented across reports, datasets, photographs, videos, publications and disconnected systems. VIGYANSETU creates a unified scientific knowledge infrastructure that preserves these assets, connects them through a knowledge graph, makes them discoverable through hybrid and natural-language search, and uses evidence-grounded AI to transform approved research into public, educational and multilingual outreach content.**
>
> **Instead of simply storing scientific information, VIGYANSETU turns institutional research into a living, searchable and reusable knowledge ecosystem — while keeping scientific experts in control of what is published.**

---

# 101. Glossary

**AI:** Artificial Intelligence.

**API:** Application Programming Interface.

**Dublin Core:** Metadata standard commonly used for describing digital resources.

**FAIR:** Findable, Accessible, Interoperable and Reusable.

**Knowledge Graph:** Structured network representing entities and relationships.

**OCR:** Optical Character Recognition.

**OAI-PMH:** Protocol for metadata harvesting.

**ORCID:** Persistent identifier for researchers.

**PostGIS:** PostgreSQL extension for geospatial data.

**RAG:** Retrieval-Augmented Generation.

**RBAC:** Role-Based Access Control.

**STT:** Speech-to-Text.

**Vector Search:** Semantic search based on embeddings.

**Embargo:** Temporary restriction on resource access.

**Provenance:** Information describing the origin and history of a resource.

**Checksum:** A cryptographic value used to verify file integrity.

**Human-in-the-loop:** Workflow where AI assists but authorized humans make final decisions.

---

# 102. PRD Status

**Current status:** SIH solution blueprint / prototype specification.

**Primary objective:** Build a convincing end-to-end prototype demonstrating:

```text
UPLOAD
  ->
AI METADATA
  ->
REVIEW
  ->
ARCHIVE
  ->
CONNECT
  ->
SEARCH
  ->
RAG
  ->
OUTREACH
  ->
VERIFY
  ->
APPROVE
  ->
PUBLISH
```

This workflow represents the central product value and should remain the primary focus of the SIH implementation.
