import ProfileSection from '@/components/dashboard/ProfileSection';
import StatsCards from '@/components/dashboard/StatsCards';
import PlatformProfiles from '@/components/dashboard/PlatformProfiles';
import ContestsSection from '@/components/dashboard/ContestsSection';
import RecommendedProblems from '@/components/dashboard/RecommendedProblems';
import ActivityHeatmap from '@/components/dashboard/ActivityHeatmap';
import StudyPlan from '@/components/dashboard/StudyPlan';
import SkillProgress from '@/components/dashboard/SkillProgress';
import RecentSubmission from '@/components/dashboard/RecentSubmission';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <ProfileSection />
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <PlatformProfiles />
            <ActivityHeatmap />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <StudyPlan />
              <SkillProgress />
            </div>
            <RecentSubmission />
          </div>
          <div className="lg:col-span-1">
            <ContestsSection />
            <RecommendedProblems />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
