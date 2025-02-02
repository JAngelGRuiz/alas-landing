import Link from 'next/link';

const insights = [
  {
    title: '+ 20años',
    description:
      'De trayectoría ayudando a que nuestros alumnos forgen las habilidades necesarias para seguir volando en su vida profesional.',
  },
  {
    title: '+ 90%',
    description: 'De nuestros alumnos ingresan a su primera opción.',
  },
  {
    title: '+ 5,000',
    description:
      'Alumnos que hemos ayudado a que ingresen a su primera opción.',
  },
];

const listOfCourses = [
  'UNAM',
  'IPN',
  'UAM',
  'COMIPEMS',
  'CENEVAL',
  'EXTRAORDINARIO',
];

export function Impression() {
  return (
    <article className="sm:h-dvh w-ful gap-y-10 l flex flex-col">
      <section className="min-w-full min-h-[95vh] sm:min-h-0 flex flex-col sm:flex-row flex-auto">
        <div className="flex-1 flex flex-col justify-center items-center sm:items-start h-full gap-y-9 sm:gap-y-4 text-center sm:text-left">
          <div className="font-extrabold text-4xl md:text-5xl [text-wrap:balance] text-primary-foreground">
            Te prepramos para tu exámen
            <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide-6 text-center sm:text-left leading-tight [&_li]:block">
                {listOfCourses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
                <li aria-hidden="true">{listOfCourses[0]}</li>
              </ul>
            </span>
          </div>
          <h1 className="text-xl text-muted-foreground leading-tight">
            ¡Estudia donde y lo que quieras! <br /> Nosotros te damos alas para
            volar
          </h1>
          <Link
            className="bg-primary rounded-md min-h-14 px-4 py-3 text-base font-semibold max-w-xs flex items-center justify-center gap-x-4"
            href="https://wa.me/+525538897507?text=Estoy%20interesado%20en%20obtener%20más%20información%20acerca%20de%20los%20cursos%20de%20ingreso."
            target="_blank"
          >
            ¡Agenda una clase muestra!
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-end h-full">
          <svg
            width="498"
            height="316"
            viewBox="0 0 498 316"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%' }}
          >
            <g clipPath="url(#clip0_93_6)">
              <mask
                id="mask0_93_6"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="-150"
                y="28"
                width="798"
                height="467"
              >
                <path d="M648 28H-150V494.875H648V28Z" fill="white" />
              </mask>
              <g mask="url(#mask0_93_6)">
                <path
                  d="M162.884 163.19C139.283 123.773 124.024 123.406 76.2648 140.418C57.0411 127.101 34.9656 113.474 24.1923 131.632C101.289 181.856 105.588 180.739 94.0621 230.72C82.4936 270.663 45.7227 360.366 -115.371 365.132M62.1386 131.681L23.187 68.2206C17.599 57.5255 30.5091 43.5715 41.8234 52.7885M41.8234 52.7885C42.1261 53.0351 42.4266 53.2972 42.7263 53.5765L85.2044 114.421M41.8234 52.7885C51.2581 43.1801 58.4856 46.3201 68.9317 59.2004M68.9317 59.2004C78.3573 70.8232 90.4023 90.3759 109.055 115.648M68.9317 59.2004C81.3119 43.4804 95.5977 62.8556 127.688 111.068C140.053 115.935 152.826 123.534 166.744 138.725C193.933 167.732 199.363 179.857 195.212 230.026C189.59 283.014 154.445 426.783 -13.6806 477.574"
                  stroke="url(#paint0_linear_93_6)"
                  strokeWidth="2"
                  className="animate-handBounce origin-bottom-left"
                />
                <path
                  d="M333.205 163.289C356.812 123.867 383.911 122.973 420.173 142.687C439.01 128.937 460.679 114.804 471.832 132.573C396.212 184.55 390.515 180.841 402.044 230.83C413.615 270.78 453.458 375.969 614.595 368.121M438.055 129.85L471.857 70.7708C477.346 60.0671 464.37 46.2784 453.162 55.5585M453.162 55.5585C452.863 55.8062 452.565 56.0701 452.269 56.3511L410.388 117.334M453.162 55.5585C443.684 46.0686 436.503 49.2588 426.189 62.1807M426.189 62.1807C416.882 73.8414 405.024 93.4241 386.622 118.762M426.189 62.1807C413.728 46.6275 399.247 64.6418 368.103 113.222C357.66 119.974 343.266 123.627 329.345 138.82C302.149 167.832 296.718 179.959 300.87 230.135C306.494 283.132 336.826 443.778 535.069 487.685"
                  stroke="url(#paint1_linear_93_6)"
                  strokeWidth="2"
                  className="animate-handBounceOpposite origin-bottom-right"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_93_6"
                x1="-8.92291"
                y1="213.972"
                x2="189.23"
                y2="229.927"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#99BDFF" />
                <stop offset="0.5" stopColor="#CCBEEB" />
                <stop offset="1" stopColor="#FFBFD6" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_93_6"
                x1="301.361"
                y1="239.821"
                x2="509.252"
                y2="223.081"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#99BDFF" />
                <stop offset="0.5" stopColor="#CCBEEB" />
                <stop offset="1" stopColor="#FFBFD6" />
              </linearGradient>
              <clipPath id="clip0_93_6">
                <rect width="498" height="316" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
      <section className="flex-1 w-full py-10 sm:py-0 bg-accent border border-primary rounded-3xl min-h-[221px] flex flex-col sm:flex-row items-center justify-center space-y-24 sm:space-y-0">
        {insights.map(({ title, description }) => (
          <article key={title} className="flex-1 flex flex-col items-center">
            <h4 className="sm:mb-9 font-bold text-3xl">{title}</h4>
            <p className="p-3 text-center text-base text-foreground">
              {description}
            </p>
          </article>
        ))}
      </section>
    </article>
  );
}
