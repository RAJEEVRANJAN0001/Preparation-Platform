import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './PageHeader.css'

function PageHeader({ title, subtitle, showBack = true, backTo = '/dashboard', onBack }) {
    const navigate = useNavigate()

    const handleBack = () => {
        if (onBack) {
            onBack()
        } else {
            navigate(backTo)
        }
    }

    return (
        <div className="page-header">
            {showBack && (
                <div className="page-header-nav">
                    <button onClick={handleBack} className="back-button">
                        <ArrowLeft size={16} /> Back
                    </button>
                </div>
            )}
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
    )
}

export default PageHeader
