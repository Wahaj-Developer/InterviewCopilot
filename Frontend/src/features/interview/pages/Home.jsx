import React, { useState, useRef } from "react";
import "../style/home.scss";
import { useInterview } from "../hooks/useInterview.js";
import { useNavigate } from "react-router";

const Home = () => {

    const {
        loading,
        generateReport,
        reports
    } = useInterview();

    const [
        jobDescription,
        setJobDescription
    ] = useState("");

    const [
        selfDescription,
        setSelfDescription
    ] = useState("");

    const [
        showDemoNotice,
        setShowDemoNotice
    ] = useState(true);

    const resumeInputRef = useRef();

    const navigate = useNavigate();

    const handleGenerateReport = async () => {

        const resumeFile =
            resumeInputRef.current.files[0];

        const data = await generateReport({
            jobDescription,
            selfDescription,
            resumeFile
        });

        navigate(`/interview/${data._id}`);
    };

    if (loading) {

        return (
            <main className="loading-screen" aria-live="polite">

                <div className="loading-spinner" />

                <p>
                    Loading...
                </p>

            </main>
        );
    }

    return (
        <div className="home-page">

            {showDemoNotice && (

                <div
                    className="demo-notice"
                    role="alert"
                >

                    <div className="demo-notice__content">

                        <strong>
                            Demo Notice
                        </strong>

                        <span>
                            This is a demo application.
                            Because it is hosted on free-tier
                            services, the demo may sleep and
                            your account/data may be deleted
                            or reset.
                        </span>

                    </div>

                    <button
                        type="button"
                        className="demo-notice__close"
                        onClick={() =>
                            setShowDemoNotice(false)
                        }
                        aria-label="Close demo notice"
                    >
                        ×
                    </button>

                </div>

            )}

            <header className="page-header">

                <h1>
                    Create Your Custom{" "}
                    <span className="highlight">
                        Interview Plan
                    </span>
                </h1>

                <p>
                    Let our AI analyze the job requirements
                    and your unique profile to build a
                    winning strategy.
                </p>

            </header>

            <div className="interview-card">

                <div className="interview-card__body">

                    <div className="panel panel--left">

                        <div className="panel__header">

                            <span className="panel__icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="2"
                                        y="7"
                                        width="20"
                                        height="14"
                                        rx="2"
                                        ry="2"
                                    />

                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </span>

                            <h2>
                                Target Job Description
                            </h2>

                            <span className="badge badge--required">
                                Required
                            </span>

                        </div>

                        <textarea
                            onChange={(e) =>
                                setJobDescription(
                                    e.target.value
                                )
                            }
                            className="panel__textarea"
                            placeholder={`Paste the full job description here...
e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
                            maxLength={5000}
                        />

                        <div className="char-counter">
                            {jobDescription.length} / 5000 chars
                        </div>

                    </div>

                    <div className="panel-divider" />

                    <div className="panel panel--right">

                        <div className="panel__header">

                            <span className="panel__icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />

                                    <circle
                                        cx="12"
                                        cy="7"
                                        r="4"
                                    />
                                </svg>
                            </span>

                            <h2>
                                Your Profile
                            </h2>

                        </div>

                        <div className="upload-section">

                            <label className="section-label">

                                Upload Resume

                                <span className="badge badge--best">
                                    Best Results
                                </span>

                            </label>

                            <label
                                className="dropzone"
                                htmlFor="resume"
                            >

                                <span className="dropzone__icon">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="16 16 12 12 8 16" />
                                        <line
                                            x1="12"
                                            y1="12"
                                            x2="12"
                                            y2="21"
                                        />
                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                    </svg>

                                </span>

                                <p className="dropzone__title">
                                    Click to upload or drag & drop
                                </p>

                                <p className="dropzone__subtitle">
                                    PDF or DOCX
                                </p>

                                <input
                                    ref={resumeInputRef}
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.docx"
                                    hidden
                                />

                            </label>

                        </div>

                        <div className="or-divider">
                            <span>OR</span>
                        </div>

                        <div className="self-description">

                            <label
                                className="section-label"
                                htmlFor="self-description"
                            >
                                Tell us about yourself
                            </label>

                            <textarea
                                id="self-description"
                                className="panel__textarea panel__textarea--short"
                                onChange={(e) =>
                                    setSelfDescription(
                                        e.target.value
                                    )
                                }
                                placeholder="Describe your skills, experience, achievements, and anything else that could help..."
                            />

                        </div>

                    </div>

                </div>

                <div className="interview-card__footer">

                    <div className="footer-info">

                        <span>
                            Your information is used only
                            to generate your interview plan.
                        </span>

                    </div>

                    <button
                        className="generate-btn"
                        onClick={handleGenerateReport}
                    >

                        Generate Interview Plan

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line
                                x1="5"
                                y1="12"
                                x2="19"
                                y2="12"
                            />

                            <polyline points="12 5 19 12 12 19" />
                        </svg>

                    </button>

                </div>

            </div>

            {reports?.length > 0 && (

                <section className="recent-reports">

                    <h2>
                        Recent Reports
                    </h2>

                    <div className="reports-list">

                                            {reports.map((report) => (

                            <div
                                className="report-item"
                                key={report._id}
                                onClick={() =>
                                    navigate(
                                        `/interview/${report._id}`
                                    )
                                }
                            >

                                <span>
                                    {report.title || "Untitled Position"}
                                </span>

                                <span className="match-score">
                                    {report.matchScore}%
                                </span>

                            </div>

                        ))}

                    </div>

                </section>

            )}

            <footer className="page-footer">

                <a href="#">
                    Privacy
                </a>

                <a href="#">
                    Terms
                </a>

                <a href="#">
                    Contact
                </a>

            </footer>

        </div>
    );
};

export default Home;