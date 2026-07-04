import { useTranslation } from "@/hooks/use-i18n";
import { Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
  skills?: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Smille Mereles",
    role: "Founder · Web & Digital Designer",
    image: "https://via.placeholder.com/300x300?text=Smille",
    bio: "Diseñadora web y digital, estratega y creadora de contenido. Diseño experiencias completas, desarrollo soluciones web y creo contenido que potencia la identidad de marca.",
    skills: [
      "Branding y diseño web",
      "UI/UX y experiencia digital",
      "Desarrollo web responsive",
      "Estrategia de contenido",
      "Lanzamiento y performance",
    ],
    socials: {
      linkedin: "https://linkedin.com/in/samil",
      twitter: "https://twitter.com/smillemereles",
    },
  },
  {
    id: 2,
    name: "Franco Boggiano",
    role: "Web Designer",
    image: "/team-franco.svg",
    bio: "Diseñador web enfocado en interfaces limpias, navegación intuitiva y experiencias visuales que comunican con claridad la propuesta de cada marca.",
    skills: [
      "Diseño web visual",
      "UI/UX y prototipado",
      "Responsive design",
      "Sistemas de diseño",
      "Diseño orientado a conversiones",
    ],
    socials: {
      linkedin: "https://linkedin.com/in/francoboggiano",
      twitter: "https://twitter.com/francoboggiano",
    },
  },
];

const stats = [
  { number: "15+", label: "projects" },
  { number: "8+", label: "clients" },
  { number: "2", label: "team" },
];

export const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="equipo" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.3em] uppercase">
            {t("team.section")}
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
            <span className="block">{t("team.title")}</span>
            <span className="block text-muted-foreground">{t("team.titleAlt")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-8">
            {t("team.description")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 mb-20 pb-20 border-b border-border/30">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {t(`team.stats.${stat.label}`)}
              </span>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-44 sm:h-64 md:h-80 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 md:p-8">
                <h3 className="text-sm sm:text-xl md:text-2xl font-display font-bold mb-0.5 md:mb-1 group-hover:text-primary transition-colors leading-tight">
                  {member.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-medium text-primary/70 uppercase tracking-wider mb-2 md:mb-4 block">
                  {member.role}
                </span>
                <p className="hidden sm:block text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                {member.skills && (
                  <ul className="hidden md:block mb-6 space-y-2 text-sm text-muted-foreground">
                    {member.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Social Links */}
                <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-border/30">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-border/50 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={14} className="md:w-4 md:h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-border/50 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter size={14} className="md:w-4 md:h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
