perl:
  - "5.14"
  - "5.20"

install:
     - export RELEASE_TESTING=1 AUTOMATED_TESTING=1 AUTHOR_TESTING=1 HARNESS_OPTIONS=c HARNESS_TIMER=1
     - cpanm --quiet --notest Devel::Cover::Report::Coveralls
     - cpanm --quiet --notest --installdeps .

script:
     - PERL5OPT=-MDevel::Cover=-coverage,statement,branch,condition,path,subroutine prove -lrsv t
     - cover

after_success:
    - cover -report coveralls