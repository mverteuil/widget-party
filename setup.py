import os
from setuptools import setup, find_packages

with open(os.path.join(os.path.dirname(__file__), 'README.rst')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='widget-party',
    version='2.2.2',
    packages=find_packages('widget_party'),
    include_package_data=True,
    install_requires=['django-dashing>=0.2.6', 'Django>=1.6', ],
    setup_requires=["setuptools_git >= 0.3"],
    license='MIT License',
    description='A collection of widgets to add functionality to django-dashing.',
    long_description=README,
    url='https://github.com/mverteuil/widget-party',
    author='Matthew de Verteuil',
    author_email='onceuponajooks@gmail.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
        'Topic :: Utilities',
    ],
)
