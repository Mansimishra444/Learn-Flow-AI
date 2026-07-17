import { featureData } from "../components/FeatureData";

const FeatureCard = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Why Choose LearnFlow AI?
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Transform your notes into interactive flashcards and quizzes,
            making studying smarter, faster, and more engaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-all duration-300">
                  <Icon className="text-cyan-400 group-hover:text-white w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;